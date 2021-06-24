/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var ref;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Record.js":
/*!*******************!*\
  !*** ./Record.js ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Record = void 0;\r\nvar utils_js_1 = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\r\nvar Record = /** @class */ (function () {\r\n    function Record(name, dob, bloodGrp, bloodReading) {\r\n        this.name = name;\r\n        this.dob = dob;\r\n        this.bloodGrp = bloodGrp;\r\n        this.bloodReading = bloodReading;\r\n    }\r\n    Record.prototype.calculateAge = function () {\r\n        var birthday = new Date(this.dob);\r\n        var diff = Date.now() - birthday.getTime();\r\n        var diffDate = new Date(diff);\r\n        return Math.abs(diffDate.getUTCFullYear() - 1970).toString();\r\n    };\r\n    Record.prototype.checkBloodLevel = function () {\r\n        return utils_js_1.checkBloodLevel(this.bloodReading);\r\n    };\r\n    Record.recordCount = 0;\r\n    return Record;\r\n}());\r\nexports.Record = Record;\r\n\n\n//# sourceURL=webpack://ref/./Record.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.editRecord = exports.deleteRecord = exports.handleSubmit = void 0;\r\nvar Record_js_1 = __webpack_require__(/*! ./Record.js */ \"./Record.js\");\r\nvar utils_js_1 = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\r\nvar form = document.getElementById(\"patientForm\");\r\nvar tableBody = document.getElementsByTagName(\"tbody\")[0];\r\nvar personName = document.getElementById(\"name\");\r\nvar personDOB = document.getElementById(\"dob\");\r\nvar personBG = document.getElementById(\"blood-group\");\r\nvar personReading = document.getElementById(\"reading\");\r\npersonDOB.max = new Date().toISOString().split(\"T\")[0];\r\nfunction handleSubmit(e) {\r\n    e.preventDefault();\r\n    var record = new Record_js_1.Record(personName.value, personDOB.value, personBG.value, personReading.value);\r\n    insertRecord(record);\r\n    form.reset();\r\n}\r\nexports.handleSubmit = handleSubmit;\r\nfunction insertRecord(record) {\r\n    var row = document.createElement(\"tr\");\r\n    var idCell = document.createElement(\"td\");\r\n    idCell.innerHTML = (++Record_js_1.Record.recordCount).toString();\r\n    row.appendChild(idCell);\r\n    Object.entries(record).forEach(function (entry) {\r\n        var cell = document.createElement(\"td\");\r\n        cell.innerHTML = entry[1];\r\n        row.appendChild(cell);\r\n        if (entry[0] === \"dob\") {\r\n            var age = record.calculateAge();\r\n            var ageCell = document.createElement(\"td\");\r\n            ageCell.innerHTML = age;\r\n            row.appendChild(ageCell);\r\n        }\r\n    });\r\n    var statusCell = document.createElement(\"td\");\r\n    var bloodLevel = record.checkBloodLevel();\r\n    statusCell.innerHTML = bloodLevel.text;\r\n    statusCell.setAttribute(\"class\", bloodLevel.style);\r\n    var iconCell = document.createElement(\"td\");\r\n    var deleteButton = document.createElement(\"button\");\r\n    deleteButton.innerText = \"X\";\r\n    deleteButton.setAttribute(\"class\", \"btn btn-danger\");\r\n    deleteButton.setAttribute(\"onclick\", \"ref.deleteRecord(\" + Record_js_1.Record.recordCount + \")\");\r\n    var editButton = document.createElement(\"button\");\r\n    editButton.innerText = \"Edit\";\r\n    editButton.setAttribute(\"class\", \"btn btn-secondary ml-1\");\r\n    editButton.setAttribute(\"onclick\", \"ref.editRecord(\" + Record_js_1.Record.recordCount + \",\" + record.checkBloodLevel + \")\");\r\n    iconCell.appendChild(deleteButton);\r\n    iconCell.appendChild(editButton);\r\n    row.appendChild(statusCell);\r\n    row.appendChild(iconCell);\r\n    row.setAttribute(\"id\", Record_js_1.Record.recordCount.toString());\r\n    tableBody.appendChild(row);\r\n}\r\nfunction deleteRecord(id) {\r\n    var selectedRow = document.getElementById(id.toString());\r\n    selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.remove();\r\n}\r\nexports.deleteRecord = deleteRecord;\r\nfunction editRecord(id) {\r\n    var _a;\r\n    var selectedRow = document.getElementById(id.toString());\r\n    var readingColumn = selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.childNodes[5];\r\n    var bloodLevelColumn = selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.childNodes[6];\r\n    var editInput = document.createElement(\"input\");\r\n    editInput.setAttribute(\"type\", \"number\");\r\n    editInput.setAttribute(\"min\", \"0\");\r\n    editInput.value = (_a = readingColumn === null || readingColumn === void 0 ? void 0 : readingColumn.firstChild) === null || _a === void 0 ? void 0 : _a.nodeValue;\r\n    editInput.addEventListener(\"blur\", function (e) {\r\n        var updatedValue = editInput.value || \"0\";\r\n        var updatedReading = document.createTextNode(updatedValue);\r\n        readingColumn === null || readingColumn === void 0 ? void 0 : readingColumn.replaceChild(updatedReading, editInput);\r\n        var updatedBloodLevel = utils_js_1.checkBloodLevel(updatedValue);\r\n        var updatedStatusCell = document.createElement(\"td\");\r\n        updatedStatusCell.innerText = updatedBloodLevel.text;\r\n        updatedStatusCell.setAttribute(\"class\", updatedBloodLevel.style);\r\n        bloodLevelColumn === null || bloodLevelColumn === void 0 ? void 0 : bloodLevelColumn.replaceWith(updatedStatusCell);\r\n    });\r\n    readingColumn === null || readingColumn === void 0 ? void 0 : readingColumn.replaceChild(editInput, readingColumn.childNodes[0]);\r\n}\r\nexports.editRecord = editRecord;\r\n\n\n//# sourceURL=webpack://ref/./index.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.checkBloodLevel = void 0;\r\nfunction checkBloodLevel(reading) {\r\n    var bloodLevel = { text: \"Normal\", style: \"table-success\" };\r\n    var readingValue = parseInt(reading);\r\n    if (readingValue < 65 || readingValue > 100) {\r\n        bloodLevel.style = \"table-danger\";\r\n        if (readingValue < 65) {\r\n            bloodLevel.text = \"Below\";\r\n        }\r\n        else {\r\n            bloodLevel.text = \"Above\";\r\n        }\r\n    }\r\n    return bloodLevel;\r\n}\r\nexports.checkBloodLevel = checkBloodLevel;\r\n\n\n//# sourceURL=webpack://ref/./utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	ref = __webpack_exports__;
/******/ 	
/******/ })()
;