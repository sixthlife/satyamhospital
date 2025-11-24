import { Component } from '@angular/core';

@Component({
  selector: 'app-ambulance-services',
  standalone: false,
  templateUrl: './ambulance-services.component.html',
  styleUrls: ['./ambulance-services.component.css'],
})
export class AmbulanceServicesComponent {
  ambulance = [
    {
      name: 'Asha Ambulance Service',
      address:
        'B/152, P C Colony Rd, Housing Board Colony, Kankarbagh, Patna, Bihar 800020, India',
      time: 'Open 24 hours',
      number: '+91 93346 91234',
    },
    {
      name: 'Jeevan Rakshak Ambulance Service',
      address:
        '43 Guru Shyam Lal Nagar, Ashiyana Nagar, Bailey Rd, near Paras Hospital, Patna, Bihar 800025, India',
      time: 'Open 24 hours',
      number: '+91 70919 52706',
    },
    {
      name: 'Emergency Ambulance Services',
      address:
        '355-B, Sheikhpura Bagicha, Sheikhpura, Patna, Bihar 800014, India',
      time: 'Open 24 hours',
      number: '+91 81028 40694',
    },
    {
      name: 'Ambulance Service Patna',
      address: 'Sector-E, Housing Board Colony, Patna, Bihar 800020, India',
      time: 'Open 24 hours',
      number: '+91 62018 11440',
    },
    {
      name: 'Patna Ambulance Services',
      address:
        'HOUSE NO-732, Body Builder Lane 3 Rajendra Prasad Colony, Sheikhpura, Patna, Bihar 800014, India',
      time: 'Open 24 hours',
      number: '+91 70338 80168',
    },
    {
      name: 'Tridev Ambulance Services in Patna',
      address:
        'G128, P C Colony Rd, beside Orion Optics, opp. Yamaha Showroom, RBI Flats Colony, Bankman Colony, Patna, Bihar 800020, India',
      time: 'Open 24 hours',
      number: '+91 70338 80168',
    },
    {
      name: 'ANSH Ambulance Service',
      address:
        'Shop No-3, Sarda Niwas, Brahmsthan Path, near Satyam Hospital, Raja Bazar, Patna, Bihar 800014, India',
      time: 'Open 24 hours',
      number: '+91 86172 02003',
    },
    {
      name: 'Sunshine Ambulance Service',
      address: 'A-220, AG Colony, Patna, Bihar 800025, India',
      time: 'Open 24 hours',
      number: '+91 97099 11054',
    },
  ];
}
