import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  standalone: true,
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {
  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(data => {
      this.utilisateurs = data;
    });
  }
}
