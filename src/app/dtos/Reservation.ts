export class Reservation {

  private date: string;
  private timeTables: string;
  private numberOfGuests: number;
  private name: string;
  private email: string;
  private phoneNumber: string;
  private message: string;


  constructor(date: string, timeTables: string, numberOfGuests: number, name: string, email: string, phoneNumber: string, message: string) {
    this.date = date;
    this.timeTables = timeTables;
    this.numberOfGuests = numberOfGuests;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
  }
}
