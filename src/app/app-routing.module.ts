import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActiveSurveyComponent } from './components/active-survey/active-survey.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';

import { AuthGuardService } from './services/authguard.serivce.service';

const routes: Routes = 
[
  {path:'home',component:HomeComponent},
  {path:'signup',component: SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component: ContactComponent},
  {path:'activesurvey',component: ActiveSurveyComponent, canActivate: [AuthGuardService]},
  {path:'surveylist',component:SurveyListComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }