const {Router} = require('express');
const router = Router();
const {NotificationController} = require('../../controllers/notification.controller');
const {verifyToken} = require('../../middlewares/verifyToken');

function NotificationRoutes(app){
    app.use('/notifications', router);

    /**
     * @openapi
     * /notifications:
     *  get:
     *      tags:
     *          - Notifications
     *      summary: "Obtener todas las notificaciones"
     *      responses: 
     *          '200':
     *              description: Obtuvo todas las notificaciones con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', [verifyToken], NotificationController.getNotifications);


    /**
     * @openapi
     * /notifications/{id}:
     *  get:
     *      tags:
     *          - Notifications
     *      summary: "Obtener una notificación en específico"
     *      description: "Obtiene una notificación mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Notification ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Notificación obtenida
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/notification'
     *          '404':
     *              description: Notificación no encontrada
     * 
     */
    router.get('/:id', [verifyToken], NotificationController.getNotification);

    /**
     * @openapi
     * /notifications/getNotificationByUser/{id}:
     *  get:
     *      tags:
     *          - Notifications
     *      summary: "Obtener una notificación en específico mediante ID del usuario"
     *      description: "Obtiene una notificación mediante el ID del usuario"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Notificación obtenida
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/notification'
     *          '404':
     *              description: Notificación no encontrada
     * 
     */
    router.get('/getNotificationByUser/:idUser', [verifyToken], NotificationController.getNotificationByUser);
 

    /**
     * @openapi
     * /notifications:
     *  post:
     *      tags:
     *          - Notifications
     *      summary: "Crear una notificación"
     *      description: "Crea una notificación para comunicar a los usuarios"
     *      requestBody:
     *          description: Campos requeridas para una notificación
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/notification'
     *      responses:
     *          '200':
     *              description: Notificación creada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/notifications'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [verifyToken], NotificationController.createNotification);

 
    /**
     * @openapi
     * /notifications/{id}:
     *  put:
     *      tags:
     *          - Notifications
     *      summary: "Actualizar notificación"
     *      description: "Actualiza los campos de una notificación"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Notification ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos de la notificación
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/updateNotification'
     *      responses:
     *          '200':
     *              description: Usuario actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/userUpdate'
     *          
     * 
     */
    router.put('/:id', [verifyToken],  NotificationController.updateNotification);

    /**
     * @openapi
     * /notifications/{id}:
     *  delete:
     *      tags:
     *          - Notifications
     *      summary: "Borrar notificación"
     *      description: "Borra una notificación mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Notification ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Notificación eliminada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/notification'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', [verifyToken],  NotificationController.deleteNotification);
}

module.exports = {NotificationRoutes};