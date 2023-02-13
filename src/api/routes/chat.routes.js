const {Router} = require('express');
const router = Router();
const {ChatController} = require('../../controllers/chat.controller');
const {verifyToken} = require('../../middlewares/verifyToken');

function ChatRoutes(app){
    app.use('/chats', router);


    /**
     * @openapi
     * /chats:
     *  get:
     *      tags:
     *          - Chats
     *      summary: "Obtener todos los chats"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los chats con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', [verifyToken], ChatController.getChats);

    /**
     * @openapi
     * /chats/{id}:
     *  get:
     *      tags:
     *          - Chats
     *      summary: "Obtener un chat específico"
     *      description: "Obtiene un chat mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Chat ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Chat obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/chat'
     *          '404':
     *              description: Chat no encontrado          
     * 
     */
    router.get('/:id', [verifyToken], ChatController.getChat);


    /**
     * @openapi
     * /chats/getOneChat:
     *  post:
     *      tags:
     *          - Chats
     *      summary: "Obtener un chat por ID's de usuarios"
     *      description: "Obtener un chat enviando un array de usuarios"
     *      requestBody:
     *          description: Campo userArray son strings de ID's de usuarios del mismo chat
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/chatGetOneChat'
     *      responses:
     *          '200':
     *              description: Chat creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/chat'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/getOneChat', [verifyToken], ChatController.getOneChat);

    /**
     * @openapi
     * /chats:
     *  post:
     *      tags:
     *          - Chats
     *      summary: "Crear chat"
     *      description: "Crea un chat entre 2 usuarios"
     *      requestBody:
     *          description: Campo users es un array de ID's del de usuarios
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/chat'
     *      responses:
     *          '200':
     *              description: Chat creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/chat'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [verifyToken], ChatController.createChat);
    
 
}

module.exports = {ChatRoutes};