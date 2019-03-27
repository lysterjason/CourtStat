import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})

export class SignInPage {

  private email: string;
  private errorMessage: string;
  private password: string;

  constructor(public authService: AuthService,
              public router: Router) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        router.navigateByUrl('/app/tabs/(create:create)');
      } else {
        console.log("Signed Out");
      }
    });
  }

  signIn(): void {
    this.authService.signIn(this.email, this.password);
  }

  signUp(): void {
    this.router.navigateByUrl('/app/sign-up');
  }
}
