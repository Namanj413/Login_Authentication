const  mongoose = require('mongoose');
const userSchema= new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true   
    },
    phone:{
        type:Number,
        require:true
    },
    role:{
        type: String,
        enum: ['user',  'admin'],
        default: 'user'
      },
      addedby:{
        type: String
        
      },
    password:{
        type:String,
        require:true,select:false
    }
  

})


const User= mongoose.model('User',userSchema);

module.exports = User;




// doubt ke lia video 15 last last  me mern thappa series 