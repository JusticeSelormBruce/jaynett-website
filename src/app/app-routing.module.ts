import { ContactComponent } from './Front-End/Components/Models/contact/contact.component';
import { TeamComponent } from './Front-End/Components/Models/team/team.component';
import { HomeComponent } from './Front-End/Components/Models/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './Front-End/Components/Models/services/services.component';
import { ProjectsComponent } from './Front-End/Components/Models/projects/projects.component';
import { NewsComponent } from './Front-End/Components/Models/news/news.component';
import { ProfessionalComponent } from './Front-End/Components/Inner-Modal/professional/professional.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'team', component: TeamComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contactus', component: ContactComponent},
  { path: 'professional', component: ProfessionalComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
