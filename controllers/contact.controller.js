const { Contact } = require("../models/contact.model")

// post API
const contactInfo = async (req, res) => {

    try {
        const contact = await Contact.create(req?.body);
    res.send(contact);
    }
    catch(er){
        res.status(403).send(er.message);
    }
};


// get API
const getContact = async (req, res) => {
    try {
        
        if(req?.query?.name){
            console.log(req?.query?.name)
            const contact = await Contact.find({name: req?.query?.name.toLowerCase()});
            const nct = contact.map(contact => contact.name);
            // const nd = contact.map(contact => contact.number);
            console.log(nct)
            if(req?.query?.name === nct[0]){
                const nwContact = await Contact.find({name: req?.query?.name.toLowerCase()});
                res.send(nwContact);
            }
            
            
        }
        else if (req?.query?.number){
            // console.log(nd)
            const contact = await Contact.find({number: req?.query?.number});
            console.log(contact)
            res.send(contact);
    }
        else{
            
            const contact = await Contact.find({}).sort({name: 1});
            res.send(contact);
        }
        
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};
// // get API
// const getContact = async (req, res) => {
//     try{
//         const result = await Contact.find({});
//         res.send(result);
//     }
//     catch(er) {
//         res.status(400).send(er);
//     }
// };



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
};


// specific contact API
const getUpdatedContact = async (req, res) => {
    try {
        const result = await Contact.findOne({_id : req?.params?.id});
        res.send(result)
    }
    catch(er){
        res.status(403).send(er);
    }
}


// delete API
const deleteContact = async (req, res) => {
    try {
        const id = {_id: req?.params?.id}
        // console.log(id)
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
exports.getUpdatedContact = getUpdatedContact;