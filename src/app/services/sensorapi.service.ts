import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorapiService {
  private apiUrl = 'http://127.0.0.1:8000/api/capteurs';

  constructor(private http: HttpClient) {}

  getCapteur(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCapteurById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCapteur(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }

  updateCapteur(id: number, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, payload);
  }
}
