import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  standalone: false,
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css'],
})
export class JobsPageComponent {
  @Input() jobs = [
    {
      title: 'Registered Nurse',
      description:
        'We are seeking a skilled and compassionate Registered Nurse to provide patient-centered care in our medical-surgical unit. Candidates should have a valid nursing license and a passion for improving patient outcomes.',
      qualification: 'General Nursing and Midwifery (GNM)',
      experience: '2 Years',
    },
    {
      title: 'Medical Laboratory Technician',
      description:
        'Join our pathology team as a Medical Laboratory Technician. Responsibilities include conducting diagnostic tests, maintaining equipment, and ensuring accurate test results. Relevant certification is required.',
      qualification: 'Diploma in Medical Lab Technician (DMLT)',
      experience: '2 Years',
    },
    {
      title: 'Front Desk Receptionist',
      description:
        'We are looking for a friendly and organized Front Desk Receptionist to manage patient appointments, inquiries, and administrative tasks. Excellent communication skills and a customer-centric attitude are essential.',
      qualification: 'Graduation',
      experience: '2 Years',
    },
  ];
}
