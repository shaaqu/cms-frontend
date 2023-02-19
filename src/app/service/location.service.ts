import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../environment';
import {Location} from "../dtos/Location";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get<Location[]>(`${this.apiUrl}restaurant/info/location/2`);
  }
}
