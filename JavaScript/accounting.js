"use strict";
const allEmployee = [];
const tBody = document.getElementById("tbody");
const tFoot = document.getElementById("tfoot");
getEmployees();
tableBodyRender("Administration");
tableBodyRender("Marketing");
tableBodyRender("Development");
tableBodyRender("Finance");
tableFootRender(allEmployee);
function getEmployees() {
  for (let i = 0; i < localStorage.length; i++) {
    allEmployee.push(JSON.parse(localStorage.getItem(`Employee${1001 + i}`)));
  }
}

function tableBodyRender(department) {
  let tr = document.createElement("tr");
  let dName = document.createElement("td");
  dName.classList.add("title");
  dName.textContent = department;
  tr.appendChild(dName);

  let employeesNumber = document.createElement("td");
  employeesNumber.classList.add("data");
  employeesNumber.textContent = calEmployees(allEmployee, department);
  tr.appendChild(employeesNumber);

  let average = document.createElement("td");
  average.classList.add("data");
  average.textContent = calAverage(
    calSalary(allEmployee, department),
    calEmployees(allEmployee, department)
  );
  tr.appendChild(average);

  let total = document.createElement("td");
  total.classList.add("data");
  total.textContent = calSalary(allEmployee, department);
  tr.appendChild(total);

  tBody.appendChild(tr);
}

function calEmployees(array, department) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].department === department) {
      counter++;
    }
  }
  return counter;
}

function calSalary(array, department) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].department === department) {
      total += array[i].salary;
    }
  }
  return total;
}
function calAverage(total, numberOfEmployees) {
  return total / numberOfEmployees;
}

function tableFootRender(array) {
  let tr = document.createElement("tr");
  let dName = document.createElement("td");
  dName.classList.add("title");
  dName.textContent = "Total";
  tr.appendChild(dName);

  let employeesNumber = document.createElement("td");
  employeesNumber.classList.add("data");
  employeesNumber.textContent = totalEmployees(allEmployee);
  tr.appendChild(employeesNumber);

  let average = document.createElement("td");
  average.classList.add("data");
  average.textContent = totalAverage(
    totalSalary(allEmployee),
    totalEmployees(allEmployee)
  );
  tr.appendChild(average);

  let total = document.createElement("td");
  total.classList.add("data");
  total.textContent = totalSalary(allEmployee);
  tr.appendChild(total);

  tFoot.appendChild(tr);
}
function totalEmployees(array) {
  return array.length;
}

function totalAverage(totalSalary, totalEmployees) {
  return totalSalary / totalEmployees;
}

function totalSalary(array) {
  let totalSalary = 0;
  for (let i = 0; i < array.length; i++) {
    totalSalary += array[i].salary;
  }
  return totalSalary;
}
