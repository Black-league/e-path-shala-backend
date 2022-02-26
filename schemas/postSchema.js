import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    likeCounter: {
        type: Number,
    },
    comments: [
        {
            commenter: {
                type: String        
            },
            comment: {
                type: String
            }            
        }
    ],
    
}, {
    timestamps: true
});

const Posts = mongoose.model('Posts', postSchema);

export default Posts;