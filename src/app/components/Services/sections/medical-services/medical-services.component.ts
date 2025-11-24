import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-services',
  standalone: false,
  templateUrl: './medical-services.component.html',
  styleUrls: ['./medical-services.component.css'],
})
export class MedicalServicesComponent {
  medicalServices = [
    {
      title: 'Cardiology',
      description:
        'Satyam Hospital in Patna, offers cardiology services to patients. These services are provided by cardiologists.',
      icon: 'assets/Services/icons/services_cardiology_icon.png',
    },
    {
      title: 'Orthopedics',
      description:
        'Orthopedics is a medical specialty,  diagnosis, treatment, and management of musculoskeletal conditions.',
      icon: 'assets/Services/icons/services_orthopedics_icon.png',
    },
    {
      title: 'Gynecology',
      description:
        'Patients can schedule appointments with gynecologists for assessments, evaluations, and treatment.',
      icon: 'assets/Services/icons/services_gynecology_icon.png',
    },
    {
      title: 'ENT',
      description:
        'The Ear, Nose, and Throat (ENT) department at hospitals like Satyam Hospital ENT specialists.',
      icon: 'assets/Services/icons/services_ent_icon.png',
    },
    {
      title: 'Neurology',
      description:
        'Satyam Hospital offers comprehensive neurology services to diagnose and manage a neurological conditions.',
      icon: 'assets/Services/icons/services_neurology_icon.png',
    },
    {
      title: 'Neuro Surgery',
      description:
        'Neurosurgeons perform a variety of brain surgeries to treat conditions such as brain tumors, vascular malformations etc',
      icon: 'assets/Services/icons/services_neuro_surgery.png',
    },
    {
      title: 'General Surgery',
      description:
        'General surgeons perform a wide range of surgical procedures involving the abdomen, digestive system, endocrine system etc.',
      icon: 'assets/Services/icons/services_general_surgery.png',
    },
    {
      title: 'Gastroenterology',
      description:
        'Satyam Hospital offers   services to diagnose and manage gastrointestinal and liver-related conditions.',
      icon: 'assets/Services/icons/services_gastroenterology_icon.png',
    },
    {
      title: 'Medicine',
      description:
        'General Physicians are available on Appointment on daily basis.',
      icon: 'assets/Services/icons/services_medicine_icon.png',
    },
    {
      title: 'Pulmonology',
      description:
        'Pulmonology services to diagnose and manage a wide range of respiratory and pulmonary disorders.',
      icon: 'assets/Services/icons/services_pulmonology_icon.png',
    },
    {
      title: 'Nephrology',
      description:
        'Nephrology services provided by nephrologists, who are experts in the field of kidney care.',
      icon: 'assets/Services/icons/services_nephrology_icon.png',
    },
    {
      title: 'Oncology',
      description:
        'Routine cancer screenings, such as mammography, Pap smears, and colonoscopies, to detect cancer at an early.',
      icon: 'assets/Services/icons/services_oncology_icon.png',
    },
  ];
}
