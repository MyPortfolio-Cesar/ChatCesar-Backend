const {Router} = require('express');
const router = Router();
const {MessageController} = require('../../controllers/message.controller');

function MessageRoutes(app){
    app.use('/messages', router);

    router.get('/', MessageController.getMessages);

    router.get('/:id', MessageController.getMessage);
 
    router.post('/', MessageController.createMessage);
 
    router.put('/:id',  MessageController.updateMessage);

    router.delete('/:id',  MessageController.deleteMessage);
}

module.exports = {MessageRoutes};