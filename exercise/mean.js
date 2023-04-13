const http = require('http');
const student = require('./student');
const mark = require('../mark')

const hostname = '127.0.0.1';
const port = 3000;

const StudentList = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'];
const StudentMark = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const student1 = new student(StudentList);
const mark1 = new mark(StudentMark);

const server = http.createServer((req, res) => {
  const myStudent = student1.getStudent();
  const myMark = mark1.getMark();
  
  // Calculate the average mark
  const totalMarks = myMark.reduce((sum, mark) => sum + mark, 0);
  const averageMark = totalMarks / myMark.length;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Average Mark: ${averageMark}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
