const {Router} = require('express');
const router = Router();
const {AuthController} = require('../../controllers/auth.controller');


function AuthRoutes(app) {
    app.use(('/auth'), router); 

    /**
     * @openapi
     * /auth/sign-up:
     *  post:
     *      tags:
     *          - Auth
     *      summary: "Sign Up"
     *      description: "Registrar un usuario"
     *      requestBody:
     *          description: Objeto modelo para crear un usuario
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/authSignUp'
     *      responses:
     *          '200':
     *              description: Usuario registrado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/authSignUp'
     * 
     */
    router.post('/sign-up', AuthController.SignUp);

    
    /**
     * @openapi
     * /auth/sign-in:
     *  post:
     *      tags:
     *          - Auth
     *      summary: "Sign In"
     *      description: "Iniciar sesión"
     *      requestBody:
     *          description: Usuario y contraseña para iniciar sesión
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/authSignIn'
     *      responses:
     *          '200':
     *              description: Inició sesión con éxito
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/authSignIn'
     * 
     */
    router.post('/sign-in', AuthController.SignIn);
}

module.exports = {AuthRoutes};