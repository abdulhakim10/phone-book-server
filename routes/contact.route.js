const express = require('express');
const { contactInfo, getContact } = require('../controllers/contact.controller');
const router = express.Router();


router.post('/',contactInfo);
router.get('/all-contact',getContact);

module.exports = router;