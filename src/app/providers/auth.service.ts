import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  loginWithGoogle() {
    return this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.afa.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithTwitter() {
    return this.afa.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  loginWithGitHub() {
    return this.afa.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    localStorage.clear();
    return this.afa.auth.signOut();
  }
}
