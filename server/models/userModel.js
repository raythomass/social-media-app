const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function (name, username, email, password) {
    if(!name || !username || !email || !password) {
        throw Error('All fields must entered')
    }

    const emailExists = await this.findOne({email})
    if(emailExists) {
        throw Error('Email is already in use')
    }

    const usernameExists = await this.findOne({username})
    if(usernameExists) {
        throw Error('Username is already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, username, email, password: hash})

    return user
}



userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields must be entered')
    }

    const user = await this.findOne({email})

    if(!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema);