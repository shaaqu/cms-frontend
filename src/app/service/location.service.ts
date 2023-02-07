import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get<JSON>(`${this.apiUrl}/locations`);
  }
}
