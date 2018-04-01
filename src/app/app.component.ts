import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: boolean;
  private displayName: string;

  user: Observable<firebase.User>;
  constructor(afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    
    this.user.subscribe((auth) => {
      if(auth == null) {
        this.isLoggedIn = false;
        console.log("auth is null");
        this.router.navigate(['login']);
      } else {
        this.isLoggedIn = true;
        this.displayName = auth.displayName;
        localStorage.setItem('displayName', auth.displayName);
        localStorage.setItem('email', auth.email);
        localStorage.setItem('photoURL', auth.photoURL);
      }
    });
  }
}