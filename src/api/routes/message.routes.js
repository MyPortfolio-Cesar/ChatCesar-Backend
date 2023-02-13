const {Router} = require('express');
const router = Router();
const {MessageController} = require('../../controllers/message.controller');
const {verifyToken} = require('../../middlewares/verifyToken');

function MessageRoutes(app){
    app.use('/messages', router);

    /**
     * @openapi
     * /messages:
     *  get:
     *      tags:
     *          - Messages
     *      summary: "Obtener todos los mensajes"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los mensajes con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', [verifyToken], MessageController.getMessages);

    /**
     * @openapi
     * /messages/{id}:
     *  get:
     *      tags:
     *          - Messages
     *      summary: "Obtener un mensaje en específico"
     *      description: "Obtiene un mensaje mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Message ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Mensaje obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/message'
     *          '404':
     *              description: Mensaje no encontrado
     * 
     */
    router.get('/:id', [verifyToken], MessageController.getMessage);
 
    /**
     * @openapi
     * /messages:
     *  post:
     *      tags:
     *          - Messages
     *      summary: "Crear un mensaje"
     *      description: "Crea un mensaje de un usuario en un chat"
     *      requestBody:
     *          description: Campos requeridas para el mensaje
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/createMessage'
     *      responses:
     *          '200':
     *              description: Mensaje creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/message'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [verifyToken], MessageController.createMessage);
 
    /**
     * @openapi
     * /messages/{id}:
     *  put:
     *      tags:
     *          - Messages
     *      summary: "Actualizar mensaje"
     *      description: "Actualiza los campos de un mensaje"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Message ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos del mensaje
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/updateMessage'
     *      responses:
     *          '200':
     *              description: Mensaje actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/message'
     *          
     * 
     */
    router.put('/:id', [verifyToken],  MessageController.updateMessage);

    /**
     * @openapi
     * /messages/{id}:
     *  delete:
     *      tags:
     *          - Messages
     *      summary: "Borrar mensaje"
     *      description: "Borra un mensaje mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Message ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Mensaje eliminado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/message'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', [verifyToken],  MessageController.deleteMessage);
}

module.exports = {MessageRoutes};