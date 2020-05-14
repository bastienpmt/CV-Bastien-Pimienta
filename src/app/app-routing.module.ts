import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationComponent } from './components/formation/formation.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfosComponent } from './components/infos/infos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: HomeComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'experience', component: ExperiencesComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'infos', component: InfosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
