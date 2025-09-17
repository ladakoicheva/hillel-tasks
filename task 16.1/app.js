function Student(name, surname, birthYear) {
  //personal info
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.age = () => {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
  };

  //academic performance
  const grades = [];
  this.getAverageGrade = function () {
    if (grades.length === 0) {
      return 0;
    }
    const sum = grades.reduce((acc, el) => acc + el, 0);
    return sum / grades.length;
  };
  this.setGrade = function (grade) {
    grades.push(grade);
  };

  //attendance

  let attendance = new Array(25).fill(null);
  let attendanceIndex = 0;

  this.present = function () {
    if (attendanceIndex < 25) {
      attendance[attendanceIndex] = true;
      attendanceIndex++;
    } else {
      console.log("ні.вже канікули,який унік?");
    }
  };
  this.absent = function () {
    if (attendanceIndex < 25) {
      attendance[attendanceIndex] = false;
      attendanceIndex++;
    } else {
      console.log("ні.вже канікули,який унік?");
    }
  };
  //summary
  this.summary = function () {
    let attendanceCoef = attendance.filter(Boolean).length / attendanceIndex;
    let aveGrade = this.getAverageGrade();
    if (attendanceCoef >= 0.9 && aveGrade >= 90) {
      return "Молодець";
    } else if (attendanceCoef >= 0.9 || aveGrade >= 90) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}
//Some examples

const student1 = new Student("Іван", "Коваль", 2000);
const student2 = new Student("Марія", "Студентка", 2002);
const student3 = new Student("Петро", "Іванов", 2001);

student1.setGrade(95);
student1.setGrade(98);
student1.setGrade(92);
for (let i = 0; i < 23; i++) {
  student1.present();
}
student1.absent();
student1.present();

console.log(`Вік ${student1.name}: ${student1.age()} років.`);
console.log(`Середній бал ${student1.name}: ${student1.getAverageGrade()}`);
console.log(`Підсумок для ${student1.name}: ${student1.summary()}`);
console.log("---");

student2.setGrade(85);
student2.setGrade(90);
student2.setGrade(88);
for (let i = 0; i < 20; i++) {
  student2.present();
}
for (let i = 0; i < 5; i++) {
  student2.absent();
}
console.log(`Вік ${student2.name}: ${student2.age()} років.`);
console.log(`Середній бал ${student2.name}: ${student2.getAverageGrade()}`);
console.log(`Підсумок для ${student2.name}: ${student2.summary()}`);
console.log("---");

student3.setGrade(70);
student3.setGrade(65);
student3.setGrade(75);
for (let i = 0; i < 15; i++) {
  student3.present();
}
for (let i = 0; i < 10; i++) {
  student3.absent();
}
console.log(`Вік ${student3.name}: ${student3.age()} років.`);
console.log(`Середній бал ${student3.name}: ${student3.getAverageGrade()}`);
console.log(`Підсумок для ${student3.name}: ${student3.summary()}`);
