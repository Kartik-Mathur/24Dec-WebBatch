const mongoose = require('mongoose');
const { Schema } = mongoose;

// {
//     _id: ObjectId('661bd51ce1a8bbd1a52bfb61'),
//     name: 'Aayush',
//   },
//   {
//     _id: ObjectId('661bdc31f3b9455227d29c5c'),
//     name: 'Baadal',
//   },
//   {
//     _id: ObjectId('661bdc37f3b9455227d29c5e'),
//     name: 'Ruchi',
//   }
// {
//     student_id: ObjectId('661bd51ce1a8bbd1a52bfb61'),
//     address: "SRM University"
// },
// {
//     student_id: ObjectId('661bdc31f3b9455227d29c5c'),
//     address: "IIT D"
// },
// {
//     student_id: ObjectId('661bdc37f3b9455227d29c5e'),
//     address: "MIT"
// }

const addressSchema = new Schema({
    student_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'students'
    },
    address: String
});

module.exports = mongoose.model('address', addressSchema);