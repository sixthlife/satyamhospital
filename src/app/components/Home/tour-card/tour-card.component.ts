import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  standalone: false, 
  templateUrl: './tour-card.component.html',
})
export class TourCardComponent {
  @Input() image: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
