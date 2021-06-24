"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBloodLevel = void 0;
function checkBloodLevel(reading) {
    var bloodLevel = { text: "Normal", style: "table-success" };
    var readingValue = parseInt(reading);
    if (readingValue < 65 || readingValue > 100) {
        bloodLevel.style = "table-danger";
        if (readingValue < 65) {
            bloodLevel.text = "Below";
        }
        else {
            bloodLevel.text = "Above";
        }
    }
    return bloodLevel;
}
exports.checkBloodLevel = checkBloodLevel;
