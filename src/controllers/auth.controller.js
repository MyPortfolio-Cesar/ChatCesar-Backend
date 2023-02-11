const User = require('../models/User');
const ContactBook = require('../models/ContactBook');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const SignIn = async(req, res) => {
    try{
        const {username, password} = req.body;
        const userFound = await User.findOne({username: username}).select('+password');
        
        if(!userFound) {
            return res.status(404).send({message: "User not found"})
        } 
        
        const passwordsCompared = await bcrypt.compare(password, userFound.password);
        console.log('aqui')
        if(!passwordsCompared){
            return res.status(400).send({message: "Invalid password"})
        }

        const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET_KEY);

        res.json({data:userFound, token});
    } catch(err) {
        return res.status(400).send({error:err})
    }
}

const SignUp = async(req, res) => {
    try{
        const {fullname , username, email, password, } = req.body;
        //hash password
        const salt = await bcrypt.genSalt(10);
        const passwordEncrypt = await bcrypt.hash(password, salt)
        const newUser = await new User({
            fullname,
            username,
            email, 
            password: passwordEncrypt, 
        });

        const userSaved = await newUser.save();
        console.log('userSaved', userSaved);
        const token = jwt.sign({id: userSaved._id}, process.env.JWT_SECRET_KEY , {expiresIn: 3600}); 

        const newContactBook = new ContactBook({
            contacts: [],
            user: userSaved._id
        });
        await newContactBook.save();
        // await sendEmail(userSaved.email); // envia el correo
        return res.status(201).json({
            token,
            data: userSaved
        });
    } catch (err){
        return res.status(400).send({error:err})
    }
}
module.exports.AuthController = {
    SignIn,
    SignUp
}