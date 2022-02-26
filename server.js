import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

import Students from './schemas/studentSchema.js';
import Teachers from './schemas/teacherSchema.js';
import Posts from './schemas/postSchema.js';

const app = express();
app.use(bodyParser.json())
config();
const PORT = process.env.PORT || 6969;

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/students';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.post('/api/students', (req, res) => {
  const student = new Students(req.body);
  
  student.save()
    .then(() => console.log('Student saved'))
    .then(() => res.send({
      status: 'success',
    }))
    .catch(err => console.log(err))

});

app.post('/api/teachers', (req, res) => {
  const student = new Teachers(req.body);
  
  student.save()
    .then(() => console.log('Teacher saved'))
    .then(() => res.send({
      status: 'success',
    }))
    .catch(err => console.log(err))

});

app.post('/api/posts', (req, res) => {
  const post = new Posts(req.body);
  
  post.save()
    .then(() => console.log('Post saved'))
    .then(() => res.send({
      status: 'success',
    }))
    .catch(err => console.log(err))

});

app.listen(PORT, () =>
  console.log('🚂 Server is running on port', PORT)
);
