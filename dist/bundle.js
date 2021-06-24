/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Record.js":
/*!*******************!*\
  !*** ./Record.js ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Record = void 0;\r\nvar Record = /** @class */ (function () {\r\n    function Record(name, dob, bloodGrp, bloodReading) {\r\n        this.name = name;\r\n        this.dob = dob;\r\n        this.bloodGrp = bloodGrp;\r\n        this.bloodReading = bloodReading;\r\n    }\r\n    return Record;\r\n}());\r\nexports.Record = Record;\r\n\n\n//# sourceURL=webpack:///./Record.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Record_js_1 = __webpack_require__(/*! ./Record.js */ \"./Record.js\");\r\nvar form = document.getElementById(\"patientForm\");\r\nvar tableBody = document.getElementsByTagName(\"tbody\")[0];\r\nvar personName = document.getElementById(\"name\");\r\nvar personDOB = document.getElementById(\"dob\");\r\nvar personBG = document.getElementById(\"blood-group\");\r\nvar personReading = document.getElementById(\"reading\");\r\npersonDOB.max = new Date().toISOString().split(\"T\")[0];\r\nvar inputs = [personName, personDOB, personBG, personReading];\r\nvar count = 0;\r\nfunction handleSubmit(e) {\r\n    e.preventDefault();\r\n    var record = new Record_js_1.Record(personName.value, personDOB.value, personBG.value, personReading.value.toString());\r\n    console.log(record);\r\n    insertRecord();\r\n    form.reset();\r\n}\r\nfunction insertRecord() {\r\n    var row = document.createElement(\"tr\");\r\n    count++;\r\n    var idCell = document.createElement(\"td\");\r\n    idCell.innerText = count.toString();\r\n    row.appendChild(idCell);\r\n    inputs.forEach(function (input) {\r\n        var cell = document.createElement(\"td\");\r\n        cell.innerHTML = input.value;\r\n        row.appendChild(cell);\r\n        if (input === personDOB) {\r\n            var age = calculateAge(input.value);\r\n            var ageCell = document.createElement(\"td\");\r\n            ageCell.innerHTML = age;\r\n            row.appendChild(ageCell);\r\n        }\r\n    });\r\n    var bloodLevel = personReading.valueAsNumber;\r\n    var statusCell = document.createElement(\"td\");\r\n    if (bloodLevel < 65 || bloodLevel > 100) {\r\n        statusCell.setAttribute(\"class\", \"table-danger\");\r\n        if (bloodLevel < 65) {\r\n            statusCell.innerHTML = \"Below\";\r\n        }\r\n        else {\r\n            statusCell.innerHTML = \"Above\";\r\n        }\r\n    }\r\n    else {\r\n        statusCell.setAttribute(\"class\", \"table-success\");\r\n        statusCell.innerHTML = \"Normal\";\r\n    }\r\n    row.appendChild(statusCell);\r\n    tableBody.appendChild(row);\r\n}\r\nfunction calculateAge(dob) {\r\n    var birthday = new Date(dob);\r\n    var diff = Date.now() - birthday.getTime();\r\n    var diffDate = new Date(diff);\r\n    return Math.abs(diffDate.getUTCFullYear() - 1970).toString();\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	
/******/ })()
;