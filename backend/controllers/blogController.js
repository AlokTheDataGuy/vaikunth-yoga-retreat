const Blog = require('../models/Blog');

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
exports.getAllPosts = async (req, res) => {
  try {
    // Build query
    const query = {};

    // Filter by published status (for public access, only show published posts)
    if (req.query.published !== 'false') {
      query.published = true;
    }

    // Filter by category
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Filter by tag
    if (req.query.tag) {
      query.tags = { $in: [req.query.tag] };
    }

    // Search by keyword
    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Blog.countDocuments(query);

    // Get blog posts
    const posts = await Blog.find(query)
      .populate('author', 'name avatar')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(startIndex)
      .limit(limit);

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: posts.length,
      pagination,
      total,
      data: posts
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog posts',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get featured blog posts
// @route   GET /api/blog/featured
// @access  Public
exports.getFeaturedPosts = async (req, res) => {
  try {
    const posts = await Blog.find({ published: true, featured: true })
      .populate('author', 'name avatar')
      .sort({ publishedAt: -1 })
      .limit(3);

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured blog posts',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get blog post by ID or slug
// @route   GET /api/blog/:id
// @access  Public
exports.getPostById = async (req, res) => {
  try {
    // Check if the parameter is a valid MongoDB ObjectId
    const isValidId = /^[0-9a-fA-F]{24}$/.test(req.params.id);

    // Build query based on whether the parameter is an ID or slug
    const query = isValidId
      ? { _id: req.params.id }
      : { slug: req.params.id };

    // For public access, only show published posts
    if (req.user?.role !== 'admin') {
      query.published = true;
    }

    const post = await Blog.findOne(query).populate('author', 'name avatar bio');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog post',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Create new blog post
// @route   POST /api/blog
// @access  Private (Admin)
exports.createPost = async (req, res) => {
  try {
    // Set author to current user
    req.body.author = req.user.id;

    // If published is true, set publishedAt to current date
    if (req.body.published) {
      req.body.publishedAt = Date.now();
    }

    const post = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: post
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create blog post',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Update blog post
// @route   PUT /api/blog/:id
// @access  Private (Admin)
exports.updatePost = async (req, res) => {
  try {
    // If published is being set to true and it wasn't before, set publishedAt to current date
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    if (req.body.published && !post.published) {
      req.body.publishedAt = Date.now();
    }

    const updatedPost = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'name avatar');

    res.status(200).json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedPost
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update blog post',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Delete blog post
// @route   DELETE /api/blog/:id
// @access  Private (Admin)
exports.deletePost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully',
      data: {}
    });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog post',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};