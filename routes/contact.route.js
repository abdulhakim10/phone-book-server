const express = require('express');
const { contactInfo, getContact, updateContact, deleteContact } = require('../controllers/contact.controller');
const router = express.Router();


router.post('/',contactInfo);
router.get('/all-contact',getContact);
router.put('/update-contact/:id',updateContact);
router.delete('/delete-contact/:id',deleteContact);

module.exports = router;