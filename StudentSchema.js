const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Age: {
        type: Number,
        required: true,
        trim : true
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Student', StudentSchema); 