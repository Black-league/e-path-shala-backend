import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
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