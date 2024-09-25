const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "please provide the name"]
    },
    email: {
        type: String,
        required: [true, "please provide the email"],
        unique: true,
        lowercase: true,

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"

    },
    password: {
        type: String,
        required: [true, "please provide the password"]
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
