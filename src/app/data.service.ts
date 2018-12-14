import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get("https://talaikis.com/api/quotes/random/");
  }

}
