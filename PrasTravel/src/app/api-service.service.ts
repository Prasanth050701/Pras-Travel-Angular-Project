import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getimage() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  signup(data: any) {
    return this.http.post('http://localhost:3000/register', data);
  }
  book(data: any) {
    return this.http.post('http://localhost:3000/book', data);
  }
  dialog(data: any) {
    return this.http.post('http://localhost:3000/dialog', data);
  }
  getexclusive(){
    return this.http.get<any>("http://localhost:3000/exclusive");
  }
}