import { Component } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  standalone: false,
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
})
export class InfoPanelComponent {
  postData = [
    {
      image: 'assets/News/post-image.png',
      date: 'October 19, 2022',
      title: 'Better health and a better way of life',
    },
    {
      image: 'assets/News/post-image.png',
      date: 'October 19, 2022',
      title: 'Protect yourself and the ones you love',
    },
    {
      image: 'assets/News/post-image.png',
      date: 'October 19, 2022',
      title: 'Let’s talk about a healthier tomorrow',
    },
  ];
}
