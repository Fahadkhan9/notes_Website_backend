const express = require("express");
const {
    getPost,
    savePost,
    singlePost,
    updatePost,
    deletePost
} = require("./../controller/blogs.controller");


const router = express.Router();

router.get('/getPost', getPost);
router.post('/savePost', savePost)
 router.get('/singlePost/:id', singlePost)
 router.patch('/updatePost/:id', updatePost)
 router.delete('/deletePost/:id', deletePost)



module.exports = router;