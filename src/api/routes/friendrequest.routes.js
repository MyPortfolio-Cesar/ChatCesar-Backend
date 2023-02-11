const {Router} = require('express');
const router = Router();
const {FriendRequestController} = require('../../controllers/friendrequest.controler');

function FriendRequestRoutes(app){
    app.use('/friend-requests', router);

    router.get('/', FriendRequestController.getFriendRequests);

    router.get('/:id', FriendRequestController.getFriendRequest);

    router.get('/getRequestsByFrom/:id', FriendRequestController.getRequestsByFrom);

    router.get('/getRequestsByTo/:id', FriendRequestController.getRequestsByTo);

    router.get('/getRequestsByUser/:idUser', FriendRequestController.getRequestsByUser);
 
    router.post('/', FriendRequestController.createFriendRequest);
 
    router.put('/:id',  FriendRequestController.updateFriendRequest);

    router.delete('/:id',  FriendRequestController.deleteFriendRequest);
}

module.exports = {FriendRequestRoutes};