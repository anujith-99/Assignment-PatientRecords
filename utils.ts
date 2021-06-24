export function checkBloodLevel(reading: string): {
  text: string;
  style: string;
} {
  let bloodLevel = { text: "Normal", style: "table-success" };
  let readingValue = parseInt(reading);

  if (readingValue < 65 || readingValue > 100) {
    bloodLevel.style = "table-danger";

    if (readingValue < 65) {
      bloodLevel.text = "Below";
    } else {
      bloodLevel.text = "Above";
    }
  }

  return bloodLevel;
}
