import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://127.0.0.1:8000';  

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/utilisateurs`);
  }

  getUtilisateurById(utilisateurId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/utilisateur/${utilisateurId}`);
  }

  createUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/utilisateurs`, utilisateur);
  }

  updateUtilisateur(utilisateurId: number, utilisateur: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/utilisateur/${utilisateurId}`, utilisateur);
  }

  deleteUtilisateur(utilisateurId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/utilisateur/${utilisateurId}`);
  }
}
