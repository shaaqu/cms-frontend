import { Component, OnInit } from '@angular/core';
import {Reservation} from "../dtos/Reservation";
import {ReservationService} from "../service/reservation.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  date: string;
  timeTables: string;
  numberOfGuests: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;

  constructor(private reservationService: ReservationService) {
    this.date = '';
    this.timeTables = '';
    this.numberOfGuests = 0;
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.message = '';
  }

  createReservation() {
    this.reservationService.postReservation(new Reservation(this.date, this.timeTables, this.numberOfGuests, this.name, this.email, this.phoneNumber, this.message));
  }

}
