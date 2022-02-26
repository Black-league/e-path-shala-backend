import express from 'express';
import mongoose from 'mongoose';

import Students from './schemas/studentSchema.js';

const app = express();

const PORT = process.env.PORT || 6969;

const dbURI = "mongodb+srv://admin:helloWorld@cluster0.5byy8.mongodb.net/userData?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/api/students', (req, res) => {
  const student = new Students({
    fullName: 'Faizan Ahmed',
    rollNumber: '12345',
    email: 'fa@email.com',
    password: '12345@fa',
    collegeId: 'college@12345',
    gender: 'Male'
  });

  student.save()
    .then(student => res.json(student))
    .then(student => console.log("Student Created : ", student))
    .catch(err => res.status(400).json(err));
});

app.listen(PORT, () =>
  console.log('🚂 Server is running on port', PORT)
);
