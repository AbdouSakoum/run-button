import { NextLevelValidComponent } from './next-level-valid/next-level-valid.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TesteComponent } from "./teste/teste.component";
import { TrainingComponent } from "./training/training.component";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes: Routes = [
  { path: '', component: NextLevelValidComponent},
  // { path: 'signup', component: SignupComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'training', component: TrainingComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
