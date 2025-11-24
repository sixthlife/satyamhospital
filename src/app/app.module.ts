import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HospitalInfoComponent } from './components/Navbar/hospital-info/hospital-info.component';
import { ContainerComponent } from './components/shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionLeftComponent } from './components/shared/section-left/section-left.component';
import { SectionRightComponent } from './components/shared/section-right/section-right.component';
import { HeroComponent } from './components/Home/sections/hero/hero.component';
import { AboutComponent } from './components/Home/sections/about/about.component';
import { SignatureComponent } from './components/shared/signature/signature.component';
import { TeamComponent } from './components/Home/sections/team/team.component';
import { HospitalTourComponent } from './components/Home/sections/hospital-tour/hospital-tour.component';
import { TourCardComponent } from './components/Home/tour-card/tour-card.component';
import { GetInTouchComponent } from './components/Home/sections/get-in-touch/get-in-touch.component';
import { TestimonialsComponent } from './components/Home/sections/testimonials/testimonials.component';
import { TestimonialCardComponent } from './components/Home/testimonial-card/testimonial-card.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { InsurancePageComponent } from './pages/insurance-page/insurance-page.component';
import { SectionHeaderComponent } from './components/shared/section-header/section-header.component';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page.component';
import { DoctorCardComponent } from './components/shared/doctor-card/doctor-card.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PharmacyPageComponent } from './pages/pharmacy-page/pharmacy-page.component';
import { JobApplicationPageComponent } from './pages/job-application-page/job-application-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { FacilitiesPageComponent } from './pages/facilities-page/facilities-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { FacilityCardComponent } from './components/Facilities/facility-card/facility-card.component';
import { MedicalServicesComponent } from './components/Services/sections/medical-services/medical-services.component';
import { ContactReceptionComponent } from './components/Services/sections/contact-reception/contact-reception.component';
import { ServiceDoctorsComponent } from './components/Services/sections/service-doctors/service-doctors.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { InfoPanelComponent } from './components/news/info-panel/info-panel.component';
import { AmbulanceServicesComponent } from './pages/ambulance-services/ambulance-services.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PolicyComponent } from './pages/policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HospitalInfoComponent,
    ContainerComponent,
    HomeComponent,
    SectionLeftComponent,
    SectionRightComponent,
    HeroComponent,
    AboutComponent,
    SignatureComponent,
    TeamComponent,
    HospitalTourComponent,
    TourCardComponent,
    GetInTouchComponent,
    TestimonialsComponent,
    TestimonialCardComponent,
    FooterComponent,
    AboutPageComponent,
    InsurancePageComponent,
    SectionHeaderComponent,
    DoctorsPageComponent,
    DoctorCardComponent,
    ContactPageComponent,
    PharmacyPageComponent,
    JobApplicationPageComponent,
    JobsPageComponent,
    FacilitiesPageComponent,
    ServicesPageComponent,
    FacilityCardComponent,
    MedicalServicesComponent,
    ContactReceptionComponent,
    ServiceDoctorsComponent,
    NewsPageComponent,
    InfoPanelComponent,
    AmbulanceServicesComponent,
    TermsComponent,
    PolicyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
