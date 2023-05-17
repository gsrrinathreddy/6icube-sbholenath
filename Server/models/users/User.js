import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userschema = new Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    role:{
        type:[(String)],
        default:'user',
        enum:["user","admin","super-admin"]
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
      type:  [String],
   
    },
 
    
},  {timestamps:true} )

export default mongoose.model('User',userschema);