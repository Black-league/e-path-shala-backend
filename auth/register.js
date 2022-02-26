import Students from '../schemas/studentSchema.js';

const register = (req, res) => {
    const student = new Student(req.body);

    console.log(student);

    // student.save()
  //   .then(student => res.json(student))
  //   .then(student => console.log("Student Created : ", student))
  //   .catch(err => res.status(400).json(err));s
}

export default register;