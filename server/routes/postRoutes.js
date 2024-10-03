const express = require('express')
const cors = require('cors')
const {
    getPosts,
    getSinglePost,
    createPost,
    deletePost,
    updatePost
} = require('../controllers/postControllers')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

//Get all posts
router.get('/', getPosts)

//Get a single post
router.get('/:id', getSinglePost)

//Create a new post
router.post('/', createPost)

//Delete a post
router.delete('/:id', deletePost)

//Update a post
router.patch('/:id', updatePost)

module.exports = router