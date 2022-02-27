import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Students from './schemas/studentSchema.js';
import Teachers from './schemas/teacherSchema.js';
import Posts from './schemas/postSchema.js';

const app = express();
app.use(bodyParser.json())
app.use(cors());

config();

const PORT = process.env.PORT || 6969;

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.post('/api/students-register', async (req, res) => {
  console.log("request body : ", req.body);
  const student = new Students(req.body);

  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    student.password = newPassword;
    student.save()
      .then(() => res.send({ status: 'success' }))
      .then(() => res.json({ message: 'Student Registered Successfully' }))
      .then(() => console.log('Student Registered Successfully'))
      .catch(err => res.status(400).json({ message: 'Error : ' + err }));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

});

app.post('/api/login-student', async (req, res) => {
  const user = await Students.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  } else {
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign({
        name: user.name,
        email: user.email,
      }, process.env.SECRET_KEY);
      return res.json({ status: 'ok', user: token })
    } else {
      return res.status(400).json({ message: 'Invalid Password' });
    }
  }

});

app.post('/api/teachers-register', (req, res) => {
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
