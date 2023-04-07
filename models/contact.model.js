const mongoose = require('mongoose');


// schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    }
});

// model
const Contact = mongoose.model('Contact', contactSchema);

// export model
exports.Contact = Contact;