const express = require('express');
const {
  getAllPrograms,
  getFeaturedPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram
} = require('../controllers/programController');

const router = express.Router();

// Get all programs and create new program
router.route('/')
  .get(getAllPrograms)
  .post(createProgram);

// Get featured programs
router.route('/featured')
  .get(getFeaturedPrograms);

// Get, update, and delete program by ID
router.route('/:id')
  .get(getProgramById)
  .put(updateProgram)
  .delete(deleteProgram);

module.exports = router;