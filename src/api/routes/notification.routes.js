const {Router} = require('express');
const router = Router();
const {NotificationController} = require('../../controllers/notification.controller');

function NotificationRoutes(app){
    app.use('/notifications', router);

    router.get('/', NotificationController.getNotifications);

    router.get('/:id', NotificationController.getNotification);

    router.get('/getNotificationByUser/:idUser', NotificationController.getNotificationByUser);
 
    router.post('/', NotificationController.createNotification);

 
    router.put('/:id',  NotificationController.updateNotification);

    router.delete('/:id',  NotificationController.deleteNotification);
}

module.exports = {NotificationRoutes};