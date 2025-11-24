import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hospital-info',
  standalone: false,
  templateUrl: './hospital-info.component.html',
})
export class HospitalInfoComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() titleVariant: string = '';
}
