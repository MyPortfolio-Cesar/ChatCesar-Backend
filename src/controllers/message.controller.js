const Message = require('../models/Message');
const Chat = require('../models/Chat');

const getMessages = async (req, res) => {
    try{
        const messages = await Message.find();
        return res.status(200).json({data: messages});
    } catch (err) {
        return res.status(400).send({err});
    }
}

const getMessage = async (req, res) => {
    try{
        const {id} = req.params;
        const message = await Message.findById(id);
        if(!message) {
            return res.status(404).send({message:"Message not found"});
        }
        return res.status(200).json({data:message});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const createMessage = async (req, res) => {
    try{
        const {content, user, chat} = req.body;
        const newMessage = new Message({
            content,
            user,
            chat
        });
        const messageSaved = await newMessage.save();
        const chatUpdated = await Chat.findByIdAndUpdate(newMessage.chat, {"$push": {messages: messageSaved}})
        res.status(201).json({data: messageSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
}

const updateMessage = async (req, res) => {
    try{
        console.log(req.params);
        console.log(req.body);
        const {id} = req.params;
        const {content} = req.body;
    
        const messageUpdated = await Message.findByIdAndUpdate(id, {content});
        res.status(200).json({message: 'Message updated', data: messageUpdated});

    } catch (err) {
        return res.status(400).send({err});
    }

}

const deleteMessage = async (req, res) => {
    try{
        const {id} = req.params;
        const messageDeleted = await Message.findByIdAndDelete(id);
        res.status(200).json({message: 'Message deleted', data: messageDeleted});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}

module.exports.MessageController = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage
}