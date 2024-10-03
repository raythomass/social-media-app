const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const postRoutes = require('./routes/postRoutes');

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/posts', postRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to Database, Listening on PORT ${process.env.PORT}`);
        })
    })
    .catch((err) => {s
        console.log(err)
    });