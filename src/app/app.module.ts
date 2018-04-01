import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from './providers/auth.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { RouterModule, Routes } from '@angular/router';

export const firebaseConfig = {
  apiKey: "AIzaSyBL8d3QHWPer37vPfJQUYHBqGxamhjq9wI",
  authDomain: "ngoauth-e36e9.firebaseapp.com",
  databaseURL: "https://ngoauth-e36e9.firebaseio.com",
  projectId: "ngoauth-e36e9",
  storageBucket: "ngoauth-e36e9.appspot.com",
  messagingSenderId: "1064467600140"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AngularFireAuth, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
