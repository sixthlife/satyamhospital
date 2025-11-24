import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors-page',
  standalone: false,
  templateUrl: './doctors-page.component.html',
  styleUrls: ['./doctors-page.component.css'],
})
export class DoctorsPageComponent {
  Doctors = [
    {
      name: 'Dr. Anil Kumar Jha',
      image: '/anil.png',
      expert: 'M.B.B.S M.D(Neuro Medicine)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Mirtunjay Kumar Singh',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D(Diabetologist)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Kumar Abhishek',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D(Pulmonologist)',
      time: '5:00 PM To 06:00 PM',
    },
    {
      name: 'Dr. Anil Kumar Singh',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D(Neuro Medicine)',
      time: '9:00 AM To 10:00 AM, 7:30 PM To 8:30 PM',
    },

    {
      name: 'Dr. Manish Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Laparoscopic)',
      time: '10:00 AM To 11:00 AM',
    },
    {
      name: 'Dr. Anil Kumar',
      image: '/anil-2.png',
      expert: 'M.B.B.S M.D(Nephrologist)',
      time: '9:00 AM To 10:00 AM, 7:30 PM To 8:30 PM',
    },
    {
      name: 'Dr. S. S. Prasad',
      image: '/prasad.png',
      expert: 'M.B.B.S M.S(ENT)',
      time: '5:00 PM To 6:00 PM',
    },
    {
      name: 'Dr. Ankur Abhishek',
      image: '/placeholder.jpeg',
      expert: 'B.D.S(Dental Surgeon)',
      time: '9:00 AM To 10:00 AM, 6:00 PM To 8:00 PM',
    },

    {
      name: 'Dr. Sanjay Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Plastic Surgeon)',
      time: '5:00 PM To 6:00 PM',
    },
    {
      name: 'Dr. S. Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S D.N.B',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. S. N. Prasad',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(General Surgeon)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Uma Agarwal',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S(Gynecologist)',
      time: '9:00 AM To 10:00 AM',
    },

    {
      name: 'Dr. Kushboo Tiwari',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D(Gynecologist)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. T.N. Raj',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D(Gastroenterologist)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Santosh Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Neurologist)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Rajiv Ranjan',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Ortho)',
      time: '9:00 AM To 10:00 AM',
    },

    {
      name: 'Dr. R.K. Roshan',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Urologist)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Gautam Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Eye Surgeon)',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Praveen Kumar Singh',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Madhusudan Sharma',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S(Ortho)',
      time: '9:00 AM To 10:00 AM',
    },

    {
      name: 'Dr. Suryabhan  Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Prakash  Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S M.C.H',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Manoj  Kumar',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.S',
      time: '9:00 AM To 10:00 AM',
    },
    {
      name: 'Dr. Neeta  Kumari',
      image: '/placeholder.jpeg',
      expert: 'M.B.B.S M.D(Pathologist)',
      time: '9:00 AM To 10:00 AM',
    },
  ];
}
