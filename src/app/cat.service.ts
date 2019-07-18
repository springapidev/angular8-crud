import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private baseUrl = "https://dummyrestapi.herokuapp.com/api/";
  constructor(private http : HttpClient) { }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategory(cat: Object): Observable<Object> {
    console.log(cat);
    return this.http.post(`${this.baseUrl}/save`, cat);
  }

  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  getcatList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
}

delCategory(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}
}
