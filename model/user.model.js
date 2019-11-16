const mongoose = require('mongoose');


var UserSchema = {
    email: {
        type: String,
        required: 'Required',

    },

    contactNo: {
        type: String,
    },
    password: {
        type: String
    }
}

mongoose.model("User", UserSchema)