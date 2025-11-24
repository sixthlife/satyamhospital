import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacy-page',
  standalone: false,
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css'],
})
export class PharmacyPageComponent {
  services: string[] = [
    'Prescription Medications',
    'Over-the-Counter (OTC) Medications',
    'Healthcare Products and Supplies',
    'Medical Equipment Rentals',
    'Generic and Branded Medications',
    'Expert Guidance and Counseling',
  ];
}
