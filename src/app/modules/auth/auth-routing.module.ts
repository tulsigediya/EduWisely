import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';

const routes: Routes = [
  {
    path:'auth/register',
    component:RegistrationComponent
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'verification',
    component:VerificationCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
