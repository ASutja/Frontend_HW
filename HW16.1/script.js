function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthDate;
};

Student.prototype.getAverage = function () {
    if (this.assessments.length === 0) return 0;
    const sum = this.assessments.reduce((acc, grade) => acc + grade, 0);
    return sum / this.assessments.length;
};

Student.prototype.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    } 
    else {
        console.log("All appointments are already full.");
    }
    return this; 
};

Student.prototype.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    } 
    else {
        console.log("All appointments are already full.");
    }
    return this; 
};

Student.prototype.getAttendanceRate = function () {
    const totalClasses = this.attendance.filter(day => day !== null).length;
    const presentDays = this.attendance.filter(day => day === true).length;
    if (totalClasses === 0) return 0;
    return presentDays / totalClasses;
};

Student.prototype.summary = function () {
    const averageGrade = this.getAverage();
    const attendanceRate = this.getAttendanceRate();
    if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Excellent!";
    } 
    else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Good, but it could be better.";
    } 
    else {
        return "Redis!";
    }
};

const student1 = new Student('Bob', 'Sponge', 2000, [95, 85, 90]);
const student2 = new Student('Patrick', 'Star', 1999, [75, 80, 70]);
const student3 = new Student('Matt', 'Smit', 2001, [60, 65, 70]);

student1.present().present().present().present().present()
        .present().present().present().present().present()
        .present().present().present().present().present()
        .present().present().present().present().present();

student2.present().absent().present().absent().present()
        .absent().present().absent().present().absent()
        .present().absent().present().absent().present();

student3.present().absent().present().absent().present()
        .absent().present().absent().present().absent();

console.log(student1.summary()); 
console.log(student2.summary()); 
console.log(student3.summary()); 
