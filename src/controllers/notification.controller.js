const Notification = require('../models/Notification');

const getNotifications = async (req, res) => {
    try{
        const notifications = await Notification.find();
        return res.status(200).json({data: notifications});
    } catch (err) {
        return res.status(400).send({err});
    }   
}

const getNotification = async (req, res) => {
    try{
        const {id} = req.params;
        const notification = await Notification.findById(id);
        if(!notification) {
            return res.status(404).send({message:"Notification not found"});
        }
        return res.status(200).json({data:notification});
    } catch(err) {
        return res.status(400).send({error: err})
    }
}

const getNotificationByUser = async (req, res) => {
    try{
        const {idUser} = req.params;
        const notification = await Notification.find({to: idUser});
        if(!notification) {
            return res.status(404).send({message:"Notifications not found"});
        }
        return res.status(200).json({data:notification});
    } catch(err) {
        return res.status(400).send({error: err})
    }
}

const createNotification = async (req, res) => {
    try{
        const {content, to, type, redirectURL} = req.body;
        const newNotification = new Notification({
            content,
            to,
            type,
            redirectURL
        });
        const notificationSaved = await newNotification.save();
        res.status(201).json({data: notificationSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
}

const updateNotification = async (req, res) => {
    try{
        console.log(req.params);
        console.log(req.body);
        const {id} = req.params;
        const {body} = req;
    
        const notificationUpdated = await Notification.findByIdAndUpdate(id, body);
        res.status(200).json({message: 'Notification updated', data: notificationUpdated});

    } catch (err) {
        return res.status(400).send({err});
    }

}

const deleteNotification = async (req, res) => {
    try{
        const {id} = req.params;
        const notificationDeleted = await Notification.findByIdAndDelete(id);
        res.status(200).json({message: 'Notification deleted', data: notificationDeleted});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}

module.exports.NotificationController = {
    getNotifications,
    getNotification,
    getNotificationByUser,
    createNotification,
    updateNotification,
    deleteNotification
}