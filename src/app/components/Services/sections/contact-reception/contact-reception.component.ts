import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-reception',
  standalone: false,
  templateUrl: './contact-reception.component.html',
  styleUrls: ['./contact-reception.component.css'],
})
export class ContactReceptionComponent {
  ContactReceptionData = [
    {
      name: 'Contact Reception',
      description:
        'Call the Reception to schedule a consultation  with available Doctors and Specialists.',
      icon: 'assets/Services/reception/contact_reception_Step_One.png',
    },
    {
      name: 'Emergency',
      description:
        'If you have an emergency you can call the Hospital Reception. They can arrange Ambulance, Urgent Medical Attention.',
      icon: 'assets/Services/reception/contact_reception_Step_Two.png',
    },
    {
      name: 'ICU, OT, Surgeries',
      description:
        'The Reception can give information about the Intensive Care Unit bed availability and Consultants availability.',
      icon: 'assets/Services/reception/contact_reception_Step_Three.png',
    },
  ];
}
