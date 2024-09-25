const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AggregationDB = new Schema({
    index: { type: Number },
    name: { type: String },
    isActive: { type: Boolean },
    registered: { type: Date },
    age: { type: Number },
    gender: { type: String },
    eyeColor: { type: String },
    favoriteFruit: { type: String },
    company: {
        title: { type: String },
        email: { type: String },
        phone: { type: String },
        location: {
            country: { type: String },
            address: { type: String },
        },
    },
    tags: [{ type: String }],
});

module.exports = mongoose.model('AggregationDB', AggregationDB)
