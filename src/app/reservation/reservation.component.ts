import { Component, OnInit } from '@angular/core';
import {Reservation} from "../dtos/Reservation";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  date: string;
  duration: number;
  numberOfGuests: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;

  constructor() {
    this.date = '';
    this.duration = 0;
    this.numberOfGuests = 0;
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.message = '';
  }

  createReservation() {
    console.log(new Reservation(this.date, this.duration, this.numberOfGuests, this.name, this.email, this.phoneNumber, this.message))

  }

}
