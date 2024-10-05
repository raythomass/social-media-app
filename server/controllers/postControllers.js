const Post = require('../models/postModel')
const mongoose = require('mongoose')

const getPosts = async (req, res) => {
    try {
        const post = await Post.find().sort({createdAt: -1})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getSinglePost = async (req, res) => {
    const { id } = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "That post does not exist"})
        }

        const post = await Post.findById(id)

        if(!post) {
            return res.status(400).json({error: "That post could not be found"})
        }

        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createPost = async (req, res) => {
    const { post_title, post_content } = req.body

    try {
        const post = await Post.create({ post_title, post_content })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "That post does not exist"})
        }

        const post = await Post.findOneAndDelete({_id: id})

        if(!post) {
            return res.status(400).json({error: "That post could not be found"})
        }

        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "That post does not exist"})
        }

        const post = await Post.findOneAndUpdate({_id: id}, {...req.body})

        if(!post) {
            return res.status(400).json({error: "That post could not be found"})
        }

        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getPosts,
    getSinglePost,
    createPost,
    deletePost,
    updatePost
}