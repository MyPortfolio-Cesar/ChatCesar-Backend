const swaggerJSDoc = require('swagger-jsdoc');

const authSchema = require('./schemas/auth.schema');
const userSchema = require('./schemas/user.schema');
const chatSchema = require('./schemas/chat.schema');
const messageSchema = require('./schemas/message.schema');
const contactBookSchema = require('./schemas/contact-book.schema');
const notificationSchema = require('./schemas/notification.schema');
const friendRequestSchema = require('./schemas/friend-request.schema');


const swaggerDefinition = {
    openapi: "3.0.1",
    info: {
        title: "API Chat Cesar Documentation",
        description: `Documentación de los endpoints utilizados en la aplicación de Chat.
        Esta plataforma es una mini red social, donde puedes agregar personas a una lista de contactos y empezar a chatear en tiempo real.
        En el siguiente link puedes encontrar la aplicación desarrollada en Angular v14: [Chat Cesar App](https://myapp-cesar.web.app/login)`,
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3001"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: 'JWT',
            }
        },
        schemas: {
            // AUTH
            authSignUp: authSchema.authSignUp,
            authSignIn: authSchema.authSignIn, 
            // USER
            user: userSchema.user,
            userUpdate: userSchema.userUpdate,
            // CHAT
            chat: chatSchema.chat,
            chatGetOneChat: chatSchema.getOneChat,
            // CONTACT BOOK
            contactBook : contactBookSchema.contactBook,
            createContactBook: contactBookSchema.createContactBook,
            updateContactBook: contactBookSchema.updateContactBook,
            addContact: contactBookSchema.addContact,
            // NOTIFICATION
            notification: notificationSchema.notification,
            updateNotification: notificationSchema.updateNotification,
            // MESSAGE
            message: messageSchema.message,
            createMessage: messageSchema.createMessage,
            updateMessage: messageSchema.updateMessage,
            // FRIEND REQUEST
            friendRequest: friendRequestSchema.friendRequest,
            createFriendRequest: friendRequestSchema.createfriendRequest,
            updateFriendRequest: friendRequestSchema.updateFriendRequest

        }
    }
}

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./src/api/routes/*.js"]
}

module.exports = swaggerJSDoc(swaggerOptions);