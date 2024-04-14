const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: String,
    age: Number
});

module.exports = mongoose.model('students', studentSchema);