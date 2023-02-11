const {Router} = require('express');
const router = Router();
const {ContactBookController} = require('../../controllers/contactbook.controller');

function ContactBookRoutes(app){
    app.use('/contact-book', router);

    router.get('/', ContactBookController.getContactBooks);

    router.get('/:id', ContactBookController.getContactBook);

    router.get('/getMyContactBook/:idUser', ContactBookController.getMyContactBook);
 
    router.post('/', ContactBookController.createContactBook);
 
    router.put('/:id',  ContactBookController.updateContactBook);

    router.post('/addContactToBook',  ContactBookController.addContactToBook);

    router.delete('/:id',  ContactBookController.deleteContactBook);
}

module.exports = {ContactBookRoutes};