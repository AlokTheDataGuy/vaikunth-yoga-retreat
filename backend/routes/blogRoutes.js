const express = require('express');
const {
  getAllPosts,
  getFeaturedPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/blogController');

// Middleware
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

// Get all posts and create new post
router.route('/')
  .get(getAllPosts)
  .post(protect, authorize('admin'), createPost);

// Get featured posts
router.route('/featured')
  .get(getFeaturedPosts);

// Get, update, and delete post by ID
router.route('/:id')
  .get(getPostById)
  .put(protect, authorize('admin'), updatePost)
  .delete(protect, authorize('admin'), deletePost);

module.exports = router;