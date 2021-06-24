"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Record_js_1 = require("./Record.js");
var form = document.getElementById("patientForm");
var tableBody = document.getElementsByTagName("tbody")[0];
var personName = document.getElementById("name");
var personDOB = document.getElementById("dob");
var personBG = document.getElementById("blood-group");
var personReading = document.getElementById("reading");
personDOB.max = new Date().toISOString().split("T")[0];
var inputs = [personName, personDOB, personBG, personReading];
var count = 0;
function handleSubmit(e) {
    e.preventDefault();
    var record = new Record_js_1.Record(personName.value, personDOB.value, personBG.value, personReading.value.toString());
    console.log(record);
    insertRecord();
    form.reset();
}
function insertRecord() {
    var row = document.createElement("tr");
    count++;
    var idCell = document.createElement("td");
    idCell.innerText = count.toString();
    row.appendChild(idCell);
    inputs.forEach(function (input) {
        var cell = document.createElement("td");
        cell.innerHTML = input.value;
        row.appendChild(cell);
        if (input === personDOB) {
            var age = calculateAge(input.value);
            var ageCell = document.createElement("td");
            ageCell.innerHTML = age;
            row.appendChild(ageCell);
        }
    });
    var bloodLevel = personReading.valueAsNumber;
    var statusCell = document.createElement("td");
    if (bloodLevel < 65 || bloodLevel > 100) {
        statusCell.setAttribute("class", "table-danger");
        if (bloodLevel < 65) {
            statusCell.innerHTML = "Below";
        }
        else {
            statusCell.innerHTML = "Above";
        }
    }
    else {
        statusCell.setAttribute("class", "table-success");
        statusCell.innerHTML = "Normal";
    }
    row.appendChild(statusCell);
    tableBody.appendChild(row);
}
function calculateAge(dob) {
    var birthday = new Date(dob);
    var diff = Date.now() - birthday.getTime();
    var diffDate = new Date(diff);
    return Math.abs(diffDate.getUTCFullYear() - 1970).toString();
}
