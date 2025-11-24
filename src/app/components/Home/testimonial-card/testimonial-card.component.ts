import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: false, 
  templateUrl: './testimonial-card.component.html',
})
export class TestimonialCardComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() review: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
}
