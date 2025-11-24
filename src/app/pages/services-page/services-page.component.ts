import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-page',
  standalone: false,
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'],
})
export class ServicesPageComponent {
  @Input() services = [
    '24/7 Emergency Care',
    'Health Checkups and Preventive Care',
    'Intensive Care  of Patients',
    'Specialty surgical services',
    'Dialysis center',
    'X-ray/radiology services',
    'Ambulance Services',
    'Physiotherapy and Rehabilitation',
  ];
}
