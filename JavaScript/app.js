"use strict";
//
const allEmployee = [];
//
let baseId = 1000;
//
const form = document.getElementById("form");
// form submit event Listener
form.addEventListener("submit", submitHandler);
// emp constructor
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
//
Employee.prototype.render = function () {
  // create a card
  const card = document.createElement("div");
  card.style.width = "300px";

  // add image to card
  const image = document.createElement("img");
  image.src = this.image;
  image.alt = this.fullName;

  // emp fullname and id
  const name_id = document.createElement("p");
  name_id.textContent = `Name: ${this.fullName} - ID: ${this.id}`;

  // emp department and level
  const dep_lvl = document.createElement("p");
  dep_lvl.classList.add("small");
  dep_lvl.textContent = `Department: ${this.department} - Level: ${this.level}`;

  // emp salary
  const salary = document.createElement("p");
  salary.classList.add("big");
  salary.textContent = this.salary;

  // append elements to card
  card.appendChild(image);
  card.appendChild(name_id);
  card.appendChild(dep_lvl);
  card.appendChild(salary);

  // append card to document
  departmentFilter(this.department, card);
};
// generating a random number
function randomSalary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// check for Department
function departmentFilter(empDep, card) {
  const admiEmps = document.getElementById("admiEmps");
  const marEmps = document.getElementById("marEmps");
  const devEmps = document.getElementById("devEmps");
  const finEmps = document.getElementById("finEmps");

  switch (empDep) {
    case "Administration":
      admiEmps.appendChild(card);
      break;
    case "Marketing":
      marEmps.appendChild(card);
      break;
    case "Development":
      devEmps.appendChild(card);
      break;
    case "Finance":
      finEmps.appendChild(card);
      break;
  }
}
// ID Generator
function IdGenerator() {
  return ++baseId;
}
// event Handler
function submitHandler(event) {
  event.preventDefault();
  const fullName = event.target.fullName.value;
  const department = event.target.department.value;
  const level = event.target.level.value;
  const image = event.target.image.value;

  const newEmp = new Employee(
    IdGenerator(),
    fullName,
    department,
    level,
    image
  );
  newEmp.render();
}

//
const emp1 = new Employee(IdGenerator(), "Ghazi Samer", "Administration", "Senior", '../assets/Ghazi.jpg');
const emp2 = new Employee(IdGenerator(), "Lana Ali", "Finance Senior", "Senior", '../assets/Lana.jpg');
const emp3 = new Employee(IdGenerator(), "Tamara Ayoub", "Marketing", "Senior", '../assets/Tamara.jpg');
const emp4 = new Employee(IdGenerator(), "Safi Walid", "Administration", "Mid-Senior", '../assets/Safi.jpg');
const emp5 = new Employee(IdGenerator(), "Omar Zaid", "Development", "Senior", '../assets/Omar.jpg');
const emp6 = new Employee(IdGenerator(), "Rana Saleh", "Development", "Junior", '../assets/Rana.jpg');
const emp7 = new Employee(IdGenerator(), "Hadi Ahmad", "Finance", "Senior", '../assets/Hadi.jpg');

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].render();
}
