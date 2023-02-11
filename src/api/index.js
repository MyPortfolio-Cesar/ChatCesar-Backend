
const {AuthRoutes} = require('./routes/auth.routes');
const {ChatRoutes} = require('./routes/chat.routes');
const {ContactBookRoutes} = require('./routes/contactbook.routes');
const { FriendRequestRoutes } = require('./routes/friendrequest.routes');
const { MessageRoutes } = require('./routes/message.routes');
const { NotificationRoutes } = require('./routes/notification.routes');
const { UserRoutes } = require('./routes/user.routes')

function indexRoutes(app){
    AuthRoutes(app);
    ChatRoutes(app);
    ContactBookRoutes(app);
    FriendRequestRoutes(app);
    MessageRoutes(app);
    NotificationRoutes(app);
    UserRoutes(app);
}

module.exports = {indexRoutes}