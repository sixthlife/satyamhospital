import { Component } from '@angular/core';

@Component({
  selector: 'app-news-page',
  standalone: false,
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent {
  newsData = [
    {
      image: 'assets/News/NewsOne.png',
      date: 'Apr 15, 2021',
      by: 'By Dainik Jagaran',
      comments: 'Comments (05)',
      title:
        'Bihar: CM Nitish and Dy.CM Renu and Tarkishore took the vaccine, Health Minister said - 50 beds for the treatment of Corona in IGIMS soon',
      description:
        'Bihar CoronaVirus Vaccination Chief Minister Nitish Kumar took the second dose of Corona vaccine on Thursday at the Indira Gandhi Institute of Medical Sciences, Patna. During this time, along with him, Deputy Chief Minister of Bihar Renu Devi and Tarkishore Prasad also got the corona vaccine.',
    },
    {
      image: 'assets/News/NewsTwo.png',
      date: 'Apr 14,2021',
      by: 'By ZEE News',
      comments: 'Comments (05)',
      title:
        'Bihar: Government increased the number of beds for Corona infected patients, capacity increased to 985',
      description:
        'Patna: Corona continues to wreak havoc in Bihar. The effect of increasing corona is visible. All the hospital beds in Patna are filled with Corona infected patients. Keeping this in mind, the state government has decided to increase beds in the hospital. Today 14 other private hospitals have also been identified as Covid Care Hospitals which have 199 beds. In this way, there will now be a total of 985 beds in 47 private hospitals.',
    },
  ];
}
