import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-page',
  standalone: false,
  templateUrl: './insurance-page.component.html',
  styleUrls: ['./insurance-page.component.css'],
})
export class InsurancePageComponent {
  InsuranceBenefits: string[] = [
    'Cashless hospitalization for eligible treatments',
    'Streamlined claim process through our tie-ups with TPA',
    'Reduced financial stress during medical emergencies',
    'Comprehensive medical services by experienced professionals',
  ];
  TireUps: string[] = [
    'Medi Assist India TPA Pvt. Ltd.',
    'Heritage Health TPA Pvt. Ltd.',
    'Family health Plan TPA Ltd.',
    'Paramount Health Services (TPA) Pvt. Ltd.',
    'Health India TPA Services Pvt. Ltd.',
    'Religare Health Insurance Company Ltd.',
    'Good Health Plan Limited',
    'Cholamandlam MS General Insurance Company Ltd.',
    'Iffco Tokio General Insurance Company Ltd.',
    'Bajaj Allianz Insurance Company Limited',
    'Reliance General Insurance.',
    'Go. Digit General Insurance Ltd.',
    'Safeway Ins. TPA Private Limited.',
    'HI TPA',
    'HDFC ERGO',
    'Cigna TTK',
    'Future Generali India Insurance Company Ltd.',
    'Ericson Insurance TPA Private Limited',
    'Apollo munich General Insurance Co',
    'Magma HDI General Insurance Co. Ltd',
  ];
}
