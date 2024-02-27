import { Router } from "express";
import { sample_user } from "../data.js";
import jwt from "jsonwebtoken";
const router = Router();
import { BAD_REQUEST } from "../constants/httpStatus.js";
import handler from "express-async-handler";
import { UserModel } from "../models/user.module.js";
import bcrypt from 'bcryptjs';
const PASSWORD_HASH__SALT_ROUNDS = 10;

function generateSimpleUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }

router.get('/', handler(async (req,res) => {
    const users = await UserModel.find({isAdmin: false});
    res.send(users);
}));

router.delete('/delete/:userId', handler(async (req, res) => {
    const userId = req.params.userId;

    const user = await UserModel.findOne({ id: userId });
    if (user) {
        await UserModel.deleteOne({ id: userId });
        console.log('Successfully Deleted');
        return res.status(200).send('User deleted successfully');
    }

    res.status(404).send('User not found');
}));

router.post('/login',handler(async (req,res) =>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        res.send(generateTokenResponse(user));
        return;
    }
    
    res.status(BAD_REQUEST).send('username or password is invalid');
}));

router.post('/register',
        handler(async (req, res) =>{
            const {name, email, password} = req.body;

            const user = await UserModel.findOne({email});

            if(user){
                res.status(BAD_REQUEST).send('User already exists, choose different email');
                return;
            }

            const hashedPassword = await bcrypt.hash(password, PASSWORD_HASH__SALT_ROUNDS);

            const newUser = {
                id: generateSimpleUniqueId(),
                name,
                email : email.toLowerCase(),
                password: hashedPassword,
            };

            const result = await UserModel.create(newUser);
            res.send(generateTokenResponse(result));

        }));

const generateTokenResponse = user => {
    const token = jwt.sign({
        id: user.id, 
        email: user.email, 
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    }
    );

    return {
        id: user.id, 
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        token,
    };
};

export default router;
