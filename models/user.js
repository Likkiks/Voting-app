const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { string, number, required } = require('yargs');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    Age:{
        type: Number,
        required:true
    },
    mobile:{
        type: String
    },
    Email:{
        type: String,
    },
    address:{
        type: String,
        required: true,
    },
    aadharCardNumber:{
        type: Number,
        required:true,
        unqiue:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type:String,
        enum: ['voter','admin'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default : false
    }
})

// personSchema.pre('save', async function (next) {
//     const user = this;

//     // Only hash if password is modified or new
//     if (!user.isModified('password')) return next();

//     try {
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(user.password, salt);
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// personSchema.methods.comparePassword = async function (candidatePassword) {
//     //return bcrypt.compare(candidatePassword, this.password);
//     try{
//         const isMatch = await bcrypt.compare(candidatePassword, this.password);
//         return isMatch;
//     }catch(err){
//         throw err;
//     }
// };

const user =  mongoose.model("user",userSchema);

module.exports = user;