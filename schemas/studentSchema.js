import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    rollNumber: {
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

const Students = mongoose.model('Students', studentSchema);

export default Students;