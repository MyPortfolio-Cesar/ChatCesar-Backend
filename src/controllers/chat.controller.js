const Chat = require('../models/Chat');

const getChats = async (req, res) => {
    try{
        const chats = await Chat.find();
        return res.json({chats})
    } catch (err) {
        return res.json({err})
    }
}

const getOneChat = async (req, res) => {
    try{
        const {userArray} = req.body;
        console.log(userArray)
        // console.log(req.query);
        
        // let idUserCesar = "63d4c565f964924fc24781df";
        // let idUserBetty = "63d443359cdde80f99dd00b5";
        // let idUserMary = "63d38e8cf50c8f42a99d0bb8";
        // let array = [idUserCesar, idUserMary];
        const myChat = await Chat.findOne({'users': {$all: userArray}});
        console.log(myChat)
        if(!myChat) return res.status(404).send({message: "Chat not exist"})
        return res.json(myChat)
    } catch(err) {
        return res.json({err})
    }
}

const getChat = async (req, res) => {
    try{
        const {id} = req.params;
        
        const chat = await Chat.findById(id).populate('messages').populate('users');
        if(!chat) return res.status(404);
        return res.status(200).json({data:chat})
    } catch (err) {
        return res.status(400).json({err})
    }
}
const createChat = async(req, res) => {
    try{
        const {users, messages} = req.body;
        console.log('llegó', users, messages);
        const newChat = new Chat({
            users,
            messages
        });
        const chatSaved = await newChat.save();
        return res.json({message: 'Chat created', data: chatSaved})
    } catch(err) {
        return res.status(400).json({message: err})
    }
}
module.exports.ChatController = {
    createChat,
    getChats,
    getChat,
    getOneChat
}