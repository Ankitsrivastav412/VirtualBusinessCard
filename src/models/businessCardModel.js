const mongoose = require("mongoose");

const ObjectId=mongoose.Schema.Types.ObjectId;

const cardSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },
    phoneNo: {
        type: String,
        require: true,
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },

    designation: {
        type: String,
        require: true,
        trim: true
    },
    companyName: {
        type: String,
        require: true,
        trim: true
    },

    websiteUrl: {
        type: String,
        trim: true,
        required: true
    },
    socialUrl: [{type:String}],

    companyLogo:{
        type:String,
        require:true
    },

}, { timestamps: true });



module.exports = mongoose.model("businessCard",cardSchema)