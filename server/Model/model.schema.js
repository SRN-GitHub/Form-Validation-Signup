const {model,Schema} = require('mongoose')

let newSchema= new Schema({
    
    fname:{type:String,
    require:[true,'First Name is Mandatory']},
    
    lname:{type:String,
    require:[true,'Last Name is Mandatory']},

    age:{type:Number,
        minlength: 1,
        maxlength: 2,
    require:[true,'Age is Required']},

    gender:{type:String,
    require:[true,'Select your Gender']},

    email:{type:String,
    require:[true,'Enter your Email']},

    password:{type:String,
    match: [
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one letter, one number, and be at least 8 characters long.'
          ],
    require:[true,'Enter your Password']}
})

module.exports=model("FormData",newSchema)