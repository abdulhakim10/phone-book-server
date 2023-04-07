const express = require('express');
const { contactInfo, getContact, updateContact } = require('../controllers/contact.controller');
const router = express.Router();


router.post('/',contactInfo);
router.get('/all-contact',getContact);
router.put('/update-contact',updateContact);

module.exports = router;