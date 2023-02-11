const {Router} = require('express');
const router = Router();
const {UserController} = require('../../controllers/user.controller');


function UserRoutes(app){
    app.use('/users', router);

    router.get('/' ,UserController.getUsers);

    router.get('/:id' ,UserController.getUser);

    router.get('/getAllOtherUsers/:id' ,UserController.getAllOtherUsers);

    router.put('/:id' ,UserController.updateUser);
    
    router.delete('/:id' ,UserController.deleteUser);

}



module.exports = {UserRoutes};