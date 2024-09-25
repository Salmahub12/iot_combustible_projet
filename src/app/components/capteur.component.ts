import { Component, OnInit } from '@angular/core';
import { SensorapiService } from '../services/sensorapi.service';

@Component({
  selector: 'app-capteur',
  standalone: true,
  templateUrl: './capteur.component.html',
  styleUrls: ['./capteur.component.css'],
  imports: [],
})
export class CapteurComponent implements OnInit {
  capteurs: any[] = [];
  capteurById: any;
  createdCapteur: any;
  updatedCapteur: any;
  searchId: number;

  constructor(private sensorapiService: SensorapiService) {
    this.searchId = 0; 
  }
  ngOnInit() {
    // Fetch all capteurs on component initialization
    this.sensorapiService.getCapteur().subscribe((data: any[]) => {
      this.capteurs = data;
    });
  }

  // Method to search capteur by ID
  searchCapteurById() {
    if (this.searchId) {
      this.sensorapiService.getCapteurById(this.searchId).subscribe(
        (data: any) => {
          this.capteurById = data;
        },
        (error) => {
          console.error('Error fetching capteur by ID', error);
        }
      );
    } else {
      console.error('No ID provided');
    }
  }

  // Example of creating a capteur
  createNewCapteur(payload: any) {
    this.sensorapiService.createCapteur(payload).subscribe(
      (data: any) => {
        this.createdCapteur = data;
        // Optionally refresh the list of capteurs
        this.ngOnInit();
      },
      (error) => {
        console.error('Error creating capteur', error);
      }
    );
  }

  // Example of updating a capteur
  updateExistingCapteur(id: number, payload: any) {
    this.sensorapiService.updateCapteur(id, payload).subscribe(
      (data: any) => {
        this.updatedCapteur = data;
        // Optionally refresh the list of capteurs
        this.ngOnInit();
      },
      (error) => {
        console.error('Error updating capteur', error);
      }
    );
  }
}
