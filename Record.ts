import { checkBloodLevel } from "./utils.js";

export class Record {
  public static recordCount: number = 0;

  constructor(
    public name: string,
    public dob: string,
    public bloodGrp: string,
    public bloodReading: string
  ) {}

  calculateAge(): string {
    let birthday = new Date(this.dob);
    let diff = Date.now() - birthday.getTime();

    let diffDate = new Date(diff);

    return Math.abs(diffDate.getUTCFullYear() - 1970).toString();
  }

  checkBloodLevel(): { text: string; style: string } {
    return checkBloodLevel(this.bloodReading);
  }
}
