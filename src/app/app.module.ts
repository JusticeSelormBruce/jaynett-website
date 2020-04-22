import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './Front-End/Components/Models/home/home.component';
import { ServicesComponent } from './Front-End/Components/Models/services/services.component';
import { NewsComponent } from './Front-End/Components/Models/news/news.component';
import { TeamComponent } from './Front-End/Components/Models/team/team.component';
import { ProjectsComponent } from './Front-End/Components/Models/projects/projects.component';
import { ContactComponent } from './Front-End/Components/Models/contact/contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NextAppComponent } from './Front-End/Components/next-app/next-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { Data } from './data';
import { ProfessionalComponent } from './Front-End/Components/Inner-Modal/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    NewsComponent,
    TeamComponent,
    ProjectsComponent,
    ContactComponent,
    NextAppComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.config),

  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
