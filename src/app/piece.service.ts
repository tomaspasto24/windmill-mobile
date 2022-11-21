import { Piece } from './WindmillInterfaces/Piece';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  url = 'http://localhost:3000/pieces';

  constructor(private http: HttpClient) { }
  
  getPieces() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie3JvbDogMX0iLCJpYXQiOjE2Njg2MDM4MDh9.RMpicy7TPTrYXWO5g19obLbTEUnYM39OZnGHzgCTCPk'});
    return this.http.get(this.url, { headers });
  }

  getPieceById(id: string): Observable<Piece[]> {
    const url = `${this.url}/${id}`
    return this.http.get<Piece[]>(url);
  }

}
