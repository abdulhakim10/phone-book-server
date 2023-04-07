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




// export controller
exports.contactInfo = contactInfo;