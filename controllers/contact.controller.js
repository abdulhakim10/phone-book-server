const { Contact } = require("../models/contact.model")

// post API
const contactInfo = async (req, res) => {

    try {
        const contact = await Contact.create(req.body);
    res.send(contact);
    }
    catch(er){
        res.status(400).send('error', er);
    }
};


// get API
const getContact = async (req, res) => {
    try{
        const result = await Contact.find({});
        res.send(result);
    }
    catch(er) {
        res.status(400).send(er);
    }
};


// export controller
exports.contactInfo = contactInfo;
exports.getContact = getContact;