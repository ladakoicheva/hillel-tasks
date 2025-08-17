const students = [
  { name: "Аня", grades: [5, 4, 4, 5] },
  { name: "Петя", grades: [3, 4, 4, 3] },
  { name: "Ира", grades: [5, 5, 5, 5] },
];

//1. Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.
console.log("task1");
const result = students.map((student) => {
  const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
  const avg = sum / student.grades.length;
  return {
    name: student.name,
    averageGrade: avg,
  };
});
console.log(result);

//2. Отфильтровать тех, у кого средний балл меньше 4.5.
console.log("task2");
const badStudents = result.filter((student) => student.averageGrade < 4.5);
console.log(badStudents);