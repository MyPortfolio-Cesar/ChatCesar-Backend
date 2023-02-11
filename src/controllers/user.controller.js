const User = require('../models/User');


const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({message: 'Get users', data: users});
    } catch(err) {
        console.log('err', err);
    } 
}

const getAllOtherUsers = async (req, res) => {
    try{
        const {id} = req.params;
        const users = await User.find({_id: { $nin: id}});
        res.status(200).json({message: 'Get users', data: users});
    } catch(err) {
        console.log('err', err);
    } 
}



const getUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).send({message:"User not found"});
        }
        return res.status(200).json({data:user});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}


const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const userUpdated = await User.findByIdAndUpdate(id, body);
    if(!userUpdated){
        return res.status(404).send({message: "User not found"})
    }
    return res.status(200).json({message: 'User updated', data: userUpdated});
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    if(!userDeleted){
        return res.status(404).send({message: "User not found"})
    }
    return res.status(200).json({message: 'User deleted', data: userDeleted});
}

module.exports.UserController = {
    getUsers,
    getUser,
    getAllOtherUsers,
    updateUser,
    deleteUser
}