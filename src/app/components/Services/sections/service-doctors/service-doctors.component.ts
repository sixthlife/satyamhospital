import { Component } from '@angular/core';

@Component({
  selector: 'app-service-doctors',
  standalone: false,
  templateUrl: './service-doctors.component.html',
  styleUrls: ['./service-doctors.component.css'],
})
export class ServiceDoctorsComponent {
  doctorsData = [
    {
      image: 'assets/Services/doctors/Services_Dr_Anil_Kumar.png',
      name: 'Dr. Anil Kumar',
      subtext: 'Kidney Specialist',
    },
    {
      image: 'assets/Services/doctors/Services_Dr_Parvin_Kumar_Image.png',
      name: 'Dr.Anil kumar Jha',
      subtext: 'Neuro Medicine',
    },
    {
      image: 'assets/Services/doctors/Services_Dr_SsPrasad_Image.png',
      name: 'Dr.S. S Prasad',
      subtext: 'ENT',
    },
  ];
}
