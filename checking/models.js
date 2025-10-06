const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const { string, number, required } = require('yargs');

const candidateSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    Age:{
        type: Number,
        required:true
    },
    party:{
        type:String,
        required: true
    },
    votes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true
            },
            votedAt:{
                type: Date,
                default :Date.now()
            }
        }
    ],
    voteCount:{
        type:Number,
        default:0
    }
});

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

const candidate =  mongoose.model("candidate",candidateSchema);

module.exports = candidate;