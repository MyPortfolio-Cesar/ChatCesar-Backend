const ContactBook = require('../models/ContactBook');

const getContactBooks = async (req, res) => {
    try{
        const categories = await ContactBook.find();
        return res.status(200).json({data: categories});
    } catch (err) {
        return res.status(400).send({err});
    }
}

const getContactBook = async (req, res) => {
    try{
        const {id} = req.params;
        const contactBook = await ContactBook.findById(id);
        if(!contactBook) {
            return res.status(404).send({message:"Contact Book not found"});
        }
        return res.status(200).json({data:contactBook});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const createContactBook = async (req, res) => {
    try{
        const {user, contacts} = req.body;
        const newContactBook = new ContactBook({
            user,
            contacts
        });

        const contactBookSaved = await newContactBook.save();
        res.status(201).json({data: contactBookSaved});
    } catch (err) {
        return res.status(400).send({err});
    } 
}

const getMyContactBook = async (req, res) => {
    try{
        const {idUser} = req.params;
        // console.log('iduser', idUser)
        const myContactBook = await ContactBook.findOne({user: idUser}).populate('contacts');
        if(!myContactBook) {
            return res.status(404).send({message:"Contact Book not found"});
        }
        return res.status(200).json({data:myContactBook});
    } catch (err) {
        return res.status(400).send({err});
    } 
}

const updateContactBook = async (req, res) => {
    try{
        console.log(req.params);
        console.log(req.body);
        const {id} = req.params;
        const {user, contacts} = req.body;
        const contactBookUpdated = await ContactBook.findByIdAndUpdate(id, {user, contacts});
        res.status(200).json({message: 'Contact Book updated', data: contactBookUpdated});

    } catch (err) {
        return res.status(400).send({err});
    }
}

const addContactToBook = async (req, res) => {
    try{
        console.log('cesar')
        console.log(req.body);
        const {userOwner, userAdded} = req.body;
        const contactBook = await ContactBook.findOne({user:userOwner});
        const contactBookUpdated = await ContactBook.findByIdAndUpdate(contactBook._id, {"$push": {contacts: userAdded}});
        res.status(200).json({message: 'Contact Book updated', data: contactBookUpdated});

    } catch (err) {
        return res.status(400).send({err});
    }
}

const deleteContactBook = async (req, res) => {
    try{
        const {id} = req.params;
        const contactBookDeleted = await ContactBook.findByIdAndDelete(id);
        res.status(200).json({message: 'Contact Book deleted', data: contactBookDeleted});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}

module.exports.ContactBookController = {
    getContactBooks,
    getContactBook,
    getMyContactBook,
    createContactBook,
    updateContactBook,
    addContactToBook,
    deleteContactBook
}