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



// update API
const updateContact = async (req, res) => {
    try{
        const id = {_id: req.params?.id};
        const updatedData = req.body;
        const result = await Contact.updateMany(id, updatedData)
        res.send(result);
    }
    catch(er) {
        res.status(400).send(er);
    }
}


// delete API
const deleteContact = async (req, res) => {
    try {
        const id = {_id: req?.params?.id}
        console.log(id)
        const result = await Contact.deleteOne(id)
        res.send(result);
    }
    catch(er) {
        res.status(400).send(er);
    }
}

// export controller
exports.contactInfo = contactInfo;
exports.getContact = getContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;