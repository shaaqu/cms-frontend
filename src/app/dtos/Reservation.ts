export class Reservation {

  private date: Date;
  private duration: number;
  private numberOfGuests: number;
  private name: string;
  private email: string;
  private phoneNumber: string;
  private message: string;


  constructor(date: string, duration: number, numberOfGuests: number, name: string, email: string, phoneNumber: string, message: string) {
    console.log(date)
    this.date = new Date(date);
    this.duration = duration;
    this.numberOfGuests = numberOfGuests;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
  }
}
