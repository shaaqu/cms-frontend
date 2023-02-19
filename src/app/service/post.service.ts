import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment";
import {Observable} from "rxjs";
import {Post} from "../dtos/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<Post[]>(`${this.apiUrl}cms/9/posts`);
  }
}
