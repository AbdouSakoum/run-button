import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
// import { SignupComponent } from './auth/signup/signup.component';
// import { LoginComponent } from './auth/login/login.component';
// import { TrainingComponent } from './training/training.component';
// import { CurrentTrainingComponent } from './training/current-training/current-training.component';
// import { NewTrainingComponent } from './training/new-training/new-training.component';
// import { PastTrainingComponent } from './training/past-training/past-training.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
// import { TesteComponent } from './teste/teste.component';
import { NextLevelValidComponent } from './next-level-valid/next-level-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    // SignupComponent,
    // LoginComponent,
    // TrainingComponent,
    // CurrentTrainingComponent,
    // NewTrainingComponent,
    // PastTrainingComponent,
    // WelcomeComponent,
    // TesteComponent,
    NextLevelValidComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
