const express = require('express');
const { contactInfo } = require('../controllers/contact.controller');
const router = express.Router();


router.post('/',contactInfo);

module.exports = router;