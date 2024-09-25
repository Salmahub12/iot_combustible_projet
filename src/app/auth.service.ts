import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsername = 'admin';
  private validPassword = 'password123';

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    // Simule un délai pour imiter une requête réseau
    if (username === this.validUsername && password === this.validPassword) {
      return of(true).pipe(delay(500)); // Connexion réussie
    }
    return of(false).pipe(delay(500)); // Échec de la connexion
  }

  logout() {
    // Logique de déconnexion
    this.router.navigate(['/login']);
  }
}
