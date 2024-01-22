"use strict";
//
const allEmployee = [];
//
function Employee(id, fullName, department, level, image) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = this.calSalary();
  this.netSalary = this.calNetSalary();
  allEmployee.push(this);
}
// calculating the salary
Employee.prototype.calSalary = function () {
  let salary = 0;
  if (this.level == "Junior") {
    salary = randomSalary(500, 1000);
  } else if (this.level == "Mid-Senior") {
    salary = randomSalary(1000, 1500);
  } else if (this.level == "Senior") {
    salary = randomSalary(1500, 2000);
  } else {
    console.log("Employee level error");
  }
  return salary;
};
// employee net salary
Employee.prototype.calNetSalary = function () {
  return this.salary - this.salary * 0.075;
};
// generating a random number
function randomSalary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//
Employee.prototype.render = function () {
  document.write(
    `<p><span class="name">Employee name:</span> ${this.fullName} ------- <span class="name">his/her net Salary:</span> ${this.netSalary}`
  );
};
//
const emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
const emp2 = new Employee(1001, "Lana Ali", "Finance Senior", "Senior");
const emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const emp4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
const emp5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
const emp6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
const emp7 = new Employee(1006, "Hadi Ahmad", "Finance", "Senior");
//
for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].render();
}
