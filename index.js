"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRecord = exports.deleteRecord = exports.handleSubmit = void 0;
var Record_js_1 = require("./Record.js");
var utils_js_1 = require("./utils.js");
var form = document.getElementById("patientForm");
var tableBody = document.getElementsByTagName("tbody")[0];
var personName = document.getElementById("name");
var personDOB = document.getElementById("dob");
var personBG = document.getElementById("blood-group");
var personReading = document.getElementById("reading");
personDOB.max = new Date().toISOString().split("T")[0];
function handleSubmit(e) {
    e.preventDefault();
    var record = new Record_js_1.Record(personName.value, personDOB.value, personBG.value, personReading.value);
    insertRecord(record);
    form.reset();
}
exports.handleSubmit = handleSubmit;
function insertRecord(record) {
    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    idCell.innerHTML = (++Record_js_1.Record.recordCount).toString();
    row.appendChild(idCell);
    Object.entries(record).forEach(function (entry) {
        var cell = document.createElement("td");
        cell.innerHTML = entry[1];
        row.appendChild(cell);
        if (entry[0] === "dob") {
            var age = record.calculateAge();
            var ageCell = document.createElement("td");
            ageCell.innerHTML = age;
            row.appendChild(ageCell);
        }
    });
    var statusCell = document.createElement("td");
    var bloodLevel = record.checkBloodLevel();
    statusCell.innerHTML = bloodLevel.text;
    statusCell.setAttribute("class", bloodLevel.style);
    var iconCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.setAttribute("onclick", "ref.deleteRecord(" + Record_js_1.Record.recordCount + ")");
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.setAttribute("class", "btn btn-secondary ml-1");
    editButton.setAttribute("onclick", "ref.editRecord(" + Record_js_1.Record.recordCount + "," + record.checkBloodLevel + ")");
    iconCell.appendChild(deleteButton);
    iconCell.appendChild(editButton);
    row.appendChild(statusCell);
    row.appendChild(iconCell);
    row.setAttribute("id", Record_js_1.Record.recordCount.toString());
    tableBody.appendChild(row);
}
function deleteRecord(id) {
    var selectedRow = document.getElementById(id.toString());
    selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.remove();
}
exports.deleteRecord = deleteRecord;
function editRecord(id) {
    var _a;
    var selectedRow = document.getElementById(id.toString());
    var readingColumn = selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.childNodes[5];
    var bloodLevelColumn = selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.childNodes[6];
    var editInput = document.createElement("input");
    editInput.setAttribute("type", "number");
    editInput.setAttribute("min", "0");
    editInput.value = (_a = readingColumn === null || readingColumn === void 0 ? void 0 : readingColumn.firstChild) === null || _a === void 0 ? void 0 : _a.nodeValue;
    editInput.addEventListener("blur", function (e) {
        var updatedValue = editInput.value || "0";
        var updatedReading = document.createTextNode(updatedValue);
        readingColumn === null || readingColumn === void 0 ? void 0 : readingColumn.replaceChild(updatedReading, editInput);
        var updatedBloodLevel = utils_js_1.checkBloodLevel(updatedValue);
        var updatedStatusCell = document.createElement("td");
        updatedStatusCell.innerText = updatedBloodLevel.text;
        updatedStatusCell.setAttribute("class", updatedBloodLevel.style);
        bloodLevelColumn === null || bloodLevelColumn === void 0 ? void 0 : bloodLevelColumn.replaceWith(updatedStatusCell);
    });
    readingColumn === null || readingColumn === void 0 ? void 0 : readingColumn.replaceChild(editInput, readingColumn.childNodes[0]);
}
exports.editRecord = editRecord;
