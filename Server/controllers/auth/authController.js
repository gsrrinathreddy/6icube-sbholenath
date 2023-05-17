import User from '../../models/users/User.js';
import bcrypt from 'bcrypt';
import { response } from 'express';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { firstName, lastName, email, username, mobile, password, role } = req.body;
    if (!firstName || !lastName || !username || !email || !password || !mobile || !role)
        return res.status(400).json({ message: "all fields are mandatory" });
    //check if userexists(or)Not.
    const existinguser = await User.findOne({ email });
    if (existinguser)
        return res.status(400).json({ message: 'user already exists' });
    try {
        const hashedpwd = await bcrypt.hash(password, 12)

        const result = await User.create({
            firstName,
            lastName,
            username,
            email,
            mobile,
            role,
            password: hashedpwd
        });
        console.log(result);
        res.status(201).json({ 'success': `${username} successfully registered` });
    } catch (error) {
        res.status(500).json
            ({ message: error.message });
    }
}

export const updateByUsername = async (req, res) => {
    const username = req.params.username;
    console.log("params",username)
    const updatedData = {...req.body};
    console.log("updated data",updatedData)
    try {
        const existinguser = await User.findOne({ username });
       
        if (!existinguser)
            return res.status(400).json({ message: 'user does not existes' });
        
        Object.assign(existinguser,updatedData);
        
       const result = await existinguser.save();

       if(!result)
       return res.status(400).json({ message: 'User not updated' });

       return res.status(200).json({ message: 'User updated' });
    } catch (err) {

    }

}

export const getAllUSers = async (req,res) => {
    const users = await User.find();
    console.log('users',users)
    if(!users)
    return res.status(404).json({message:"there are no users"})

    res.status(200).json({message:"users fetched succesfully",data:users})
}

export const updateByUserId = async (req, res) => {
    const userId = req.params._id;
    console.log("params",userId)
    const updatedData = {...req.body};
    const filter = {_id:req.params._id}
   // console.log("updated data",updatedData)
    try {
      //  const existinguser = await User.findById(req.params._id);
      //const existinguser = await User.findOneAndUpdate(filter,updatedData);
      const updatedUser = await User.findOneAndUpdate(filter,updatedData,{new:true})
      console.log(updatedUser)
        if (!updatedUser)
            return res.status(400).json({ message: 'Id does not existes' });
        
    //     Object.assign(existinguser,updatedData);
        
    //    const result = await existinguser.save();

    //    if(!result)
    //    return res.status(400).json({ message: 'User not updated' });

       return res.status(200).json({ message: 'User updated' });
    } catch (err) {
        res.status(500).json({message:err})
    }

}

export const deleteUserById = async (req,res) => {

    const params = req.params._id;

    const result = await User.deleteOne({_id:req.params._id});
        console.log("result",result)
    if(result.deletedCount === 0)
       return res.status(401).json({message:"The user does not exist"})

    res.status(200).json({message:"the user deleted successfully"})

}

export const login = async (req,res)=>{
    const {email,password}=req.body;
    if(!email||!password)
    return res.status(400).json({message:"email and password both are required"});

    const founduser = await User.findOne({email});
    if (!founduser)
    return res.send (400).json ({message:"user does not exist"});
    const passwordMatch = await bcrypt.compare(password,founduser.password);
    if (!passwordMatch)
    return res.send(403).json({message:'unauthorized'});

     const responseData={
        username: founduser.username,
        role: founduser.role
    }
     res.status(201).json({message:"user sucessfully logged in", 
     data : responseData});

}