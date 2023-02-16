import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment";
import {Reservation} from "../dtos/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  postReservation(reservation: Reservation) {
    return this.http.post(`${this.apiUrl}restaurant/reservation`, reservation)
  }
}
