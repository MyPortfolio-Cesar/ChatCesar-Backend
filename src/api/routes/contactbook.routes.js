const {Router} = require('express');
const router = Router();
const {ContactBookController} = require('../../controllers/contactbook.controller');
const {verifyToken} = require('../../middlewares/verifyToken');

function ContactBookRoutes(app){
    app.use('/contact-book', router);

    /**
     * @openapi
     * /contact-book:
     *  get:
     *      tags:
     *          - Contact Book
     *      summary: "Obtener todas las agendas de contactos"
     *      responses: 
     *          '200':
     *              description: Obtuvo todas las agendas de contactos con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', [verifyToken], ContactBookController.getContactBooks);

    /**
     * @openapi
     * /contact-book/{id}:
     *  get:
     *      tags:
     *          - Contact Book
     *      summary: "Obtener una agenda de contactos específica"
     *      description: "Obtiene una agenda de contactos mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Contact Book ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Contact Book obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/contactBook'
     *          '404':
     *              description: Contact Book no encontrado          
     * 
     */
    router.get('/:id', [verifyToken], ContactBookController.getContactBook);


    /**
     * @openapi
     * /contact-book/getMyContactBook/{id}:
     *  get:
     *      tags:
     *          - Contact Book
     *      summary: "Obtener una agenda de contactos por el ID del usuario"
     *      description: "Obtiene una agenda de contactos por el ID del usuario"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Contact Book obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/contactBook'
     *          '404':
     *              description: Contact Book no encontrado          
     * 
     */
    router.get('/getMyContactBook/:idUser', [verifyToken], ContactBookController.getMyContactBook);
 
    /**
     * @openapi
     * /contact-book:
     *  post:
     *      tags:
     *          - Contact Book
     *      summary: "Crear Contact Book"
     *      description: "Crear una agenda de contactos para un usuario"
     *      requestBody:
     *          description: Campo de user es el ID del usuario propietario de la agenda a crear
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/createContactBook'
     *      responses:
     *          '200':
     *              description: Contact Book registrado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/contactBook'
     * 
     */
    router.post('/', [verifyToken], ContactBookController.createContactBook);
 
    /**
     * @openapi
     * /contact-book/{id}:
     *  put:
     *      tags:
     *          - Contact Book
     *      summary: "Actualizar agenda de contactos"
     *      description: "Actualiza los contactos de la agenda"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Contact Book ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos de la agenda de contactos
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/updateContactBook'
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
    router.put('/:id', [verifyToken], ContactBookController.updateContactBook);

    /**
     * @openapi
     * /contact-book/addContactToBook:
     *  post:
     *      tags:
     *          - Contact Book
     *      summary: "Agrega un contacto a la agenda"
     *      description: "Actualiza los contactos del usuario (userOwner) y agregar un usuario (userAdded)"
     *      requestBody:
     *          description: User Owner propietario de la agenda agrega a un User Added
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/addContact'
     *      responses:
     *          '200':
     *              description: Contact Book registrado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/contactBook'
     * 
     */
    router.post('/addContactToBook', [verifyToken], ContactBookController.addContactToBook);

    /**
     * @openapi
     * /contact-book/{id}:
     *  delete:
     *      tags:
     *          - Contact Book
     *      summary: "Borrar agenda de contactos"
     *      description: "Borra una agenda de contactos mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Contact Book ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Contact Book eliminado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/contactBook'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', [verifyToken], ContactBookController.deleteContactBook);
}

module.exports = {ContactBookRoutes};