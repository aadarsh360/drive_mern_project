const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3,"Username must be at least 3 character long"]
    },

    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[13,"Email must be at least 13 character long"]
    },

    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[5,"Password must be at least 5 character long"]
    }
})

const User2 = mongoose.model("User2", userSchema);

module.exports = User2;