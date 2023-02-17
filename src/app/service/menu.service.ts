import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment";
import {Observable} from "rxjs";
import {Location} from "../dtos/Location";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<Location[]>(`${this.apiUrl}menu/categories/1`);
  }

  getMenuPositionByCategory(categoryId: number): Observable<any> {
    return this.http.get<Location[]>(`${this.apiUrl}menu/category/${categoryId}`);
  }

  getMenuPositionPicture(menuPositionId: number): Observable<any> {
    return this.http.get<Location[]>(`${this.apiUrl}menu/${menuPositionId}/picture`);
  }
}
