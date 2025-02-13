const express = require('express');
const router = express.Router();

// Define the /ping route
router.get('/ping', (req, res, next) => {
  try {
    res.json({ message: 'pong' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
