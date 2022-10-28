import { NextLevelValidComponent } from './next-level-valid/next-level-valid.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



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
