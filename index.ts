import { Record } from "./Record.js";
import { checkBloodLevel } from "./utils.js";

let form = <HTMLFormElement>document.getElementById("patientForm")!;
let tableBody = document.getElementsByTagName("tbody")[0];

let personName = <HTMLInputElement>document.getElementById("name");
let personDOB = <HTMLInputElement>document.getElementById("dob");
let personBG = <HTMLInputElement>document.getElementById("blood-group");
let personReading = <HTMLInputElement>document.getElementById("reading");

personDOB.max = new Date().toISOString().split("T")[0];

export function handleSubmit(e: Event) {
  e.preventDefault();

  let record = new Record(
    personName.value,
    personDOB.value,
    personBG.value,
    personReading.value
  );

  insertRecord(record);

  form.reset();
}

function insertRecord(record: Record) {
  let row = document.createElement("tr");

  let idCell = document.createElement("td");
  idCell.innerHTML = (++Record.recordCount).toString();
  row.appendChild(idCell);

  Object.entries(record).forEach((entry) => {
    let cell = document.createElement("td");
    cell.innerHTML = entry[1];
    row.appendChild(cell);
    if (entry[0] === "dob") {
      let age = record.calculateAge();
      let ageCell = document.createElement("td");
      ageCell.innerHTML = age;
      row.appendChild(ageCell);
    }
  });

  let statusCell = document.createElement("td");
  let bloodLevel = record.checkBloodLevel();
  statusCell.innerHTML = bloodLevel.text;
  statusCell.setAttribute("class", bloodLevel.style);

  let iconCell = document.createElement("td");

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.setAttribute("class", "btn btn-danger");
  deleteButton.setAttribute(
    "onclick",
    `ref.deleteRecord(${Record.recordCount})`
  );

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.setAttribute("class", "btn btn-secondary ml-1");
  editButton.setAttribute(
    "onclick",
    `ref.editRecord(${Record.recordCount},${record.checkBloodLevel})`
  );

  iconCell.appendChild(deleteButton);
  iconCell.appendChild(editButton);

  row.appendChild(statusCell);
  row.appendChild(iconCell);

  row.setAttribute("id", Record.recordCount.toString());

  tableBody.appendChild(row);
}

export function deleteRecord(id: number) {
  let selectedRow = document.getElementById(id.toString());
  selectedRow?.remove();
}

export function editRecord(id: number) {
  let selectedRow = document.getElementById(id.toString());
  let readingColumn = selectedRow?.childNodes[5];
  let bloodLevelColumn = selectedRow?.childNodes[6];

  let editInput = document.createElement("input");
  editInput.setAttribute("type", "number");
  editInput.setAttribute("min", "0");
  editInput.value = readingColumn?.firstChild?.nodeValue!;

  editInput.addEventListener("blur", function (e) {
    let updatedValue = editInput.value || "0";
    let updatedReading = document.createTextNode(updatedValue);
    readingColumn?.replaceChild(updatedReading, editInput);

    let updatedBloodLevel = checkBloodLevel(updatedValue);
    let updatedStatusCell = document.createElement("td");
    updatedStatusCell.innerText = updatedBloodLevel.text;
    updatedStatusCell.setAttribute("class", updatedBloodLevel.style);

    bloodLevelColumn?.replaceWith(updatedStatusCell);
  });

  readingColumn?.replaceChild(editInput, readingColumn.childNodes[0]);
}
