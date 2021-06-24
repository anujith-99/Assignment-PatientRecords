"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
var utils_js_1 = require("./utils.js");
var Record = /** @class */ (function () {
    function Record(name, dob, bloodGrp, bloodReading) {
        this.name = name;
        this.dob = dob;
        this.bloodGrp = bloodGrp;
        this.bloodReading = bloodReading;
    }
    Record.prototype.calculateAge = function () {
        var birthday = new Date(this.dob);
        var diff = Date.now() - birthday.getTime();
        var diffDate = new Date(diff);
        return Math.abs(diffDate.getUTCFullYear() - 1970).toString();
    };
    Record.prototype.checkBloodLevel = function () {
        return utils_js_1.checkBloodLevel(this.bloodReading);
    };
    Record.recordCount = 0;
    return Record;
}());
exports.Record = Record;
