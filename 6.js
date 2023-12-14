function filterStudents(students) {
    const studentsAbove90 = [];
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const sum = student.scores.reduce((acc, score) => acc + score, 0);
      const average = sum / student.scores.length;
  
      if (average > 90) {
        studentsAbove90.push({
          name: student.name,
          averageScore: average,
        });
      }
    }
  
    return studentsAbove90;
  }


const students =
[
{ name: "Alice", scores: [90, 85, 92] },
{ name: "Bob", scores: [75, 80, 85] },
{ name: "Charlie", scores: [90, 95, 85] },
{ name: "Jack", scores: [100, 100, 100] }
];

console.log(filterStudents(students))