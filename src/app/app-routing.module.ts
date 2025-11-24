import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { InsurancePageComponent } from './pages/insurance-page/insurance-page.component';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PharmacyPageComponent } from './pages/pharmacy-page/pharmacy-page.component';
import { JobApplicationPageComponent } from './pages/job-application-page/job-application-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { FacilitiesPageComponent } from './pages/facilities-page/facilities-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AmbulanceServicesComponent } from './pages/ambulance-services/ambulance-services.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PolicyComponent } from './pages/policy/policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'insurance', component: InsurancePageComponent },
  { path: 'doctors', component: DoctorsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'pharmacy', component: PharmacyPageComponent },
  { path: 'job-application', component: JobApplicationPageComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'facilities', component: FacilitiesPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'ambulance-services', component: AmbulanceServicesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'policy', component: PolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
