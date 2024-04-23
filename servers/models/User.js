const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
},
{
    timestamps:true,
}
);

const UserModel = mongoose.model ("User" , userSchema)

module.exports = UserModel

// module.exports = mongoose.model('User', userSchema);








/* const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },


    email : {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})


const UserModel = mongoose.model ("User" , UserScheme)



module.exports = UserModel */