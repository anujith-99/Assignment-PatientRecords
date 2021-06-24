import { Record } from "./Record.js";

let form = <HTMLFormElement>document.getElementById("patientForm")!;
let tableBody = document.getElementsByTagName("tbody")[0];

let personName = <HTMLInputElement>document.getElementById("name");
let personDOB = <HTMLInputElement>document.getElementById("dob");
let personBG = <HTMLInputElement>document.getElementById("blood-group");
let personReading = <HTMLInputElement>document.getElementById("reading");

personDOB.max = new Date().toISOString().split("T")[0];

let inputs = [personName, personDOB, personBG, personReading];

let count = 0;

function handleSubmit(e: Event) {
  e.preventDefault();

  let record = new Record(
    personName.value,
    personDOB.value,
    personBG.value,
    personReading.value.toString()
  );

  console.log(record);

  insertRecord();

  form.reset();
}

function insertRecord() {
  let row = document.createElement("tr");

  count++;
  let idCell = document.createElement("td");
  idCell.innerText = count.toString();
  row.appendChild(idCell);

  inputs.forEach((input) => {
    let cell = document.createElement("td");
    cell.innerHTML = input.value;
    row.appendChild(cell);
    if (input === personDOB) {
      let age = calculateAge(input.value);
      let ageCell = document.createElement("td");
      ageCell.innerHTML = age;
      row.appendChild(ageCell);
    }
  });

  let bloodLevel = personReading.valueAsNumber;
  let statusCell = document.createElement("td");
  if (bloodLevel < 65 || bloodLevel > 100) {
    statusCell.setAttribute("class", "table-danger");
    if (bloodLevel < 65) {
      statusCell.innerHTML = "Below";
    } else {
      statusCell.innerHTML = "Above";
    }
  } else {
    statusCell.setAttribute("class", "table-success");
    statusCell.innerHTML = "Normal";
  }

  row.appendChild(statusCell);

  tableBody.appendChild(row);
}

function calculateAge(dob: string) {
  let birthday = new Date(dob);
  let diff = Date.now() - birthday.getTime();

  let diffDate = new Date(diff);

  return Math.abs(diffDate.getUTCFullYear() - 1970).toString();
}
