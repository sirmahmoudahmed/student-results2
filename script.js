class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  calculateAverage() {
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
  }

  getGradeLetter(avg) {
    if (avg >= 85) return "A";
    if (avg >= 75) return "B";
    if (avg >= 65) return "C";
    if (avg >= 55) return "D";
    if (avg >= 50) return "E";
    return "F";
  }

  getFinalStatus() {
    const avg = this.calculateAverage();
    if (avg >= 50 && this.attendance >= 75) {
      return "Passed";
    } else {
      return "Needs Review";
    }
  }
}

const studentsList = [
  new Student(101, "Ahmed Mohamed", [85, 90, 88], 90),
  new Student(102, "Mahmoud Ahmed", [44, 46, 42], 80),
  new Student(103, "Ali Ibrahim", [70, 75, 72], 65),
  new Student(104, "Kareem Hassan", [48, 41, 45], 78)
];

console.log("=== All Students Performance Report ===");
studentsList.forEach(student => {
  const avg = student.calculateAverage();
  console.log(`Name: ${student.name} | Avg: ${avg.toFixed(2)} | Grade: ${student.getGradeLetter(avg)} | Status: ${student.getFinalStatus()}`);
});

const strugglingStudents = studentsList.filter(student => {
  const avg = student.calculateAverage();
  return avg >= 40 && avg < 50;
});

console.log("\n=== Struggling Students (Before Grace) ===");
strugglingStudents.forEach(s => {
  console.log(`${s.name} - Original Avg: ${s.calculateAverage().toFixed(2)}`);
});

const boostedAverages = strugglingStudents.map(student => {
  return student.calculateAverage() + 5;
});

console.log("\n=== Boosted Averages (+5 Grace Marks) ===");
boostedAverages.forEach((newAvg, index) => {
  console.log(`${strugglingStudents[index].name} - New Avg: ${newAvg.toFixed(2)}`);
});

const totalBoosted = boostedAverages.reduce((acc, curr) => acc + curr, 0);

const finalGraceAverage = strugglingStudents.length > 0 
  ? totalBoosted / strugglingStudents.length 
  : 0;

console.log("\n=== Grace Committee Summary ===");
console.log(`Average of Struggling Students After Boost: ${finalGraceAverage.toFixed(2)}`);