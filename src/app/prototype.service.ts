import { Piece } from './WindmillInterfaces/Piece';
import { Observable } from 'rxjs';
import { Windmill } from './WindmillInterfaces/Windmill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrototypeService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/prototypes';

  getPrototypes(): Observable<Windmill[]> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie3JvbDogMX0iLCJpYXQiOjE2Njg2MDM4MDh9.RMpicy7TPTrYXWO5g19obLbTEUnYM39OZnGHzgCTCPk'});
    return this.http.get<Windmill[]>(this.url, {headers});
  }
}
