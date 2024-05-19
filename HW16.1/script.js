class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.birthYear = birthYear; 
        this.grades = []; 
        this.attendance = new Array(25).fill(null); 
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("The grade must range from 0 to 100.");
        }
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("All appointments are already full.");
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("All appointments are already full.");
        }
    }

    getAttendanceRate() {
        const totalClasses = this.attendance.filter(day => day !== null).length;
        const presentDays = this.attendance.filter(day => day === true).length;
        if (totalClasses === 0) return 0;
        return presentDays / totalClasses;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRate = this.getAttendanceRate();
        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Excellent!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Good, but it could be better.";
        } else {
            return "Redis!";
        }
    }
}

const student1 = new Student("Bob", "Smith", 2000);
const student2 = new Student("John", "Jonson", 1999);
const student3 = new Student("Sam", "Tarly", 2001);

student1.addGrade(95);
student1.addGrade(85);
student1.addGrade(90);

student2.addGrade(75);
student2.addGrade(80);
student2.addGrade(70);

student3.addGrade(60);
student3.addGrade(65);
student3.addGrade(70);

for (let i = 0; i < 20; i++) {
    student1.present();
}

for (let i = 0; i < 15; i++) {
    student2.present();
    student2.absent();
}

for (let i = 0; i < 10; i++) {
    student3.present();
    student3.absent();
}

console.log(student1.summary()); 
console.log(student2.summary()); 
console.log(student3.summary()); 
