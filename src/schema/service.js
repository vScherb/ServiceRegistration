var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
    title: String,
    url: String,
    service: String,
    version: Number
});

module.exports = serviceSchema;
