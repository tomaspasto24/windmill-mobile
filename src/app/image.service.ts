import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public getImage(imageName: string): Observable<Blob> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie3JvbDogMX0iLCJpYXQiOjE2Njg2MDM4MDh9.RMpicy7TPTrYXWO5g19obLbTEUnYM39OZnGHzgCTCPk'});
    return this.http.get(`http://localhost:3000/image/${imageName}`, { responseType: 'blob', headers });
  }

}
