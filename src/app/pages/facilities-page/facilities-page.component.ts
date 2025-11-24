import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities-page',
  standalone: false,
  templateUrl: './facilities-page.component.html',
  styleUrls: ['./facilities-page.component.css'],
})
export class FacilitiesPageComponent {
  facilities = [
    {
      image: 'assets/facilities/cards/Ambulance-Services.png',
      title: 'Ambulance Services available',
      description:
        'Satyam Hospital offers Ambulance Services with the help of its affiliations with Ambulance Networks.',
      Icon: 'assets/facilities/cards/Ambulance-Services-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/Poision-Patients.png',
      title: 'Poison Patients Special Facility',
      description:
        'Dedicated Poison Control Center facility with emergency departments are equipped to handle cases of poisoning and toxic exposures.',
      Icon: 'assets/facilities/cards/Poision-Patients-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/Dialysis.png',
      title: 'Dialysis Facility for Hepatitis B and C',
      description:
        'Separate dialysis machines are available for paitent hepatits B and hepatits C.',
      Icon: 'assets/facilities/cards/Dialysis-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/placeholder2.png',
      title: 'Laproscopic Surgery Facility',
      description:
        'Kidney Stone, Gall blader Stone, Hysterectomy, hernia,  Appendix Surgeries with Laproscopic machine is available.',
      Icon: 'assets/facilities/cards/Lapropscopic-Picture-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/placeholder2.png',
      title: 'ERCP, CBD',
      description:
        'ERCP is typically performed by a specialized Gastroenterology and involves the use of an endoscope  the bile ducts and pancreatic duct.',
      Icon: 'assets/facilities/cards/CBD-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/Care-Facility.png',
      title: 'Intensive Care Facility',
      description:
        'The Intensive Care Unit (ICU) is equipped with 24 hour oxygen supply, Monitors and Ventilator for rapid intervention for critically ill patients.',
      Icon: 'assets/facilities/cards/Care-Facility-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/Operation.png',
      title: 'Operation Theater',
      description:
        'Operation theater has Surgical Suites, Anesthesia Machines,C-arms Monitoring Equipment, Surgical Instruments etc.',
      Icon: 'assets/facilities/cards/Operation-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/placeholder2.png',
      title: 'Pharmacy',
      description:
        'The Intensive Care Unit (ICU) is equipped with 24 hour oxygen supply, Monitors and Ventilator for rapid intervention for critically ill patients.',
      Icon: 'assets/facilities/cards/Pharmacy-Icon.svg',
    },
    {
      image: 'assets/facilities/cards/Emergency.png',
      title: '24/7 Emergency and Trauma center',
      description:
        'The emergency facilities at Satyam Hospital  is a  24/7 Trauma Centre and Accident Facility Centre, equipped to handle a range of medical crisis',
      Icon: 'assets/facilities/cards/Emergency-Icon.svg',
    },
  ];
}
