const FriendRequest = require('../models/FriendRequest');

const getFriendRequests = async (req, res) => {
    try{
        const friendRequests = await FriendRequest.find();
        return res.status(200).json({data: friendRequests});
    } catch (err) {
        return res.status(400).send({err});
    }
}

const getFriendRequest = async (req, res) => {
    try{
        const {id} = req.params;
        const friendRequest = await FriendRequest.findById(id);
        if(!friendRequest) {
            return res.status(404).send({message:"Friend Request not found"});
        }
        return res.status(200).json({data:friendRequest});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const getRequestsByFrom = async (req, res) => {
    try{
        const {id} = req.params;
        const friendRequests = await FriendRequest.find({from: id}).populate('to');
        if(!friendRequests) {
            return res.status(404).send({message:"Friend Requests not found"});
        }
        return res.status(200).json({data:friendRequests});
    } catch(err) {
        return res.status(400).send({error: err})
    } 
}

const getRequestsByTo = async (req, res) => {
    try{
        const {id} = req.params;
        const friendRequests = await FriendRequest.find({to: id}).populate('from');
        if(!friendRequests) {
            return res.status(404).send({message:"Friend Requests not found"});
        }
        return res.status(200).json({data:friendRequests});
    } catch(err) {
        return res.status(400).send({error: err})
    } 
}

const getRequestsByUser = async (req, res) => {
    try{
        const {idUser} = req.params;
        const friendRequests = await FriendRequest.find({$or: [{'from': idUser}, {'to': idUser}]})
            .populate('from').populate('to');
        if(!friendRequests) {
            return res.status(404).send({message:"Friend Requests not found"});
        }
        return res.status(200).json({data:friendRequests});
    } catch(err) {
        return res.status(400).send({error: err})
    } 
}

const createFriendRequest = async (req, res) => {
    try{
        const {from, to} = req.body;
        const newFriendRequest = new FriendRequest({
            from,
            to
        });
        const friendRequestSaved = await newFriendRequest.save();
        res.status(201).json({data: friendRequestSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}

const updateFriendRequest = async (req, res) => {
    try{
        console.log(req.params);
        console.log(req.body);
        const {id} = req.params;
        const {from, to, status} = req.body;
    
        const friendRequestUpdated = await FriendRequest.findByIdAndUpdate(id, {from, to, status});
        res.status(200).json({message: 'Friend Request updated', data: friendRequestUpdated});

    } catch (err) {
        return res.status(400).send({err});
    }

}

const deleteFriendRequest = async (req, res) => {
    try{
        const {id} = req.params;
        const friendRequestDeleted = await FriendRequest.findByIdAndDelete(id);
        res.status(200).json({message: 'Friend Request deleted', data: friendRequestDeleted});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}

module.exports.FriendRequestController = {
    getFriendRequests,
    getFriendRequest,
    getRequestsByFrom,
    getRequestsByTo,
    getRequestsByUser,
    createFriendRequest,
    updateFriendRequest,
    deleteFriendRequest
}