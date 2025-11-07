const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'GenX PK Story Backend Test - MongoDB Connected 🚀'
  });
});

module.exports = router;
