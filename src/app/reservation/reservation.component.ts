import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  
  private date: string;
  private duration: string;
  private numberOfGuest: string;
  private name: string;
  private email: string;
  private phoneNumber: string;
  private message: string;

  constructor() {
    this.date = '';
    this.duration = '';
    this.numberOfGuest = '';
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.message = '';
  }

  ngOnInit(): void {
    this.date = '';
    this.duration = '';
    this.numberOfGuest = '';
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.message = '';
  }

  createReservation() {
    console.log(this.message)
  }

}
