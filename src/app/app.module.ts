import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ProfilComponent } from './components/profil/profil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlReferenceComponent } from './components/url-reference/url-reference.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationComponent } from './components/formation/formation.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfosComponent } from './components/infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompetencesComponent,
    WelcomePageComponent,
    ProfilComponent,
    UrlReferenceComponent,
    ExperiencesComponent,
    FormationComponent,
    ContactComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
