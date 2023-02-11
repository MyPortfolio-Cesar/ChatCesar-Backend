const {Router} = require('express');
const router = Router();
const {ChatController} = require('../../controllers/chat.controller');


function ChatRoutes(app){
    app.use('/chats', router);


    router.get('/', ChatController.getChats);
    router.get('/:id', ChatController.getChat);
    router.post('/getOneChat', ChatController.getOneChat);

    router.post('/', ChatController.createChat);
    
 
}

module.exports = {ChatRoutes};