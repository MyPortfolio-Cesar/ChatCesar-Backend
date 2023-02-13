const {Router} = require('express');
const router = Router();
const {FriendRequestController} = require('../../controllers/friendrequest.controler');
const {verifyToken} = require('../../middlewares/verifyToken');

function FriendRequestRoutes(app){
    app.use('/friend-requests', router);

    /**
     * @openapi
     * /friend-requests:
     *  get:
     *      tags:
     *          - Friend Requests
     *      summary: "Obtener todas las solicitudes de amistad"
     *      responses: 
     *          '200':
     *              description: Obtuvo todas las solicitudes de amistad con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', [verifyToken], FriendRequestController.getFriendRequests);

    /**
     * @openapi
     * /friend-requests/{id}:
     *  get:
     *      tags:
     *          - Friend Requests
     *      summary: "Obtener una solicitud de amistad en específico"
     *      description: "Obtiene una solicitud de amistad mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Friend Request ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Solicitud de amistad obtenida
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *          '404':
     *              description: Solicitud de amistad no encontrada
     * 
     */
    router.get('/:id', [verifyToken], FriendRequestController.getFriendRequest);

    /**
     * @openapi
     * /friend-requests/getRequestsByFrom/{id}:
     *  get:
     *      tags:
     *          - Friend Requests
     *      summary: "Obtener solicitudes de amistad del emisor "
     *      description: "Obtiene solicitudes de amistad mediante el ID del usuario emisor"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Solicitudes de amistad obtenidas
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *          '404':
     *              description: Solicitudes de amistad no encontradas
     * 
     */
    router.get('/getRequestsByFrom/:id', [verifyToken], FriendRequestController.getRequestsByFrom);

    /**
     * @openapi
     * /friend-requests/getRequestsByTo/{id}:
     *  get:
     *      tags:
     *          - Friend Requests
     *      summary: "Obtener solicitudes de amistad del receptor"
     *      description: "Obtiene solicitudes de amistad mediante el ID del usuario receptor"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Solicitudes de amistad obtenidas
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *          '404':
     *              description: Solicitudes de amistad no encontradas
     * 
     */
    router.get('/getRequestsByTo/:id', [verifyToken], FriendRequestController.getRequestsByTo);

    /**
     * @openapi
     * /friend-requests/getRequestsByUser/{id}:
     *  get:
     *      tags:
     *          - Friend Requests
     *      summary: "Obtener solicitudes de amistad de un usuario siendo emisor o receptor"
     *      description: "Obtiene todas solicitudes de amistad mediante el ID del usuario siendo emisor o receptor"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Solicitudes de amistad obtenidas
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *          '404':
     *              description: Solicitudes de amistad no encontradas
     * 
     */
    router.get('/getRequestsByUser/:idUser', [verifyToken], FriendRequestController.getRequestsByUser);
 
        /**
     * @openapi
     * /friend-requests:
     *  post:
     *      tags:
     *          - Friend Requests
     *      summary: "Crear una solicitud de amistad"
     *      description: "Crea una solicitud de amistad entre usuarios"
     *      requestBody:
     *          description: From (usuario emisor), To (usuario receptor)
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/createFriendRequest'
     *      responses:
     *          '200':
     *              description: Mensaje creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [verifyToken], FriendRequestController.createFriendRequest);
 

    /**
     * @openapi
     * /friend-requests/{id}:
     *  put:
     *      tags:
     *          - Friend Requests
     *      summary: "Actualizar la solicitud de amistad"
     *      description: "Actualiza el estado de la solicitud"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Friend Request ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Nuevo estado de la solicitud
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/updateFriendRequest'
     *      responses:
     *          '200':
     *              description: Mensaje actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *          
     * 
     */
    router.put('/:id', [verifyToken],  FriendRequestController.updateFriendRequest);

    /**
     * @openapi
     * /friend-requests/{id}:
     *  delete:
     *      tags:
     *          - Friend Requests
     *      summary: "Borrar solicitud de amistad"
     *      description: "Borra una solicitud de amistad por su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Friend Request ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Solicitud de amistad eliminada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/friendRequest'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', [verifyToken],  FriendRequestController.deleteFriendRequest);
}

module.exports = {FriendRequestRoutes};