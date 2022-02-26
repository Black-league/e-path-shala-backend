import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    empId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    collegeId: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Teachers = mongoose.model('Teachers', teacherSchema);

export default Teachers;