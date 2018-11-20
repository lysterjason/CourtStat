import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private email: string;
  private password: string;

  constructor(public afAuth: AngularFireAuth,
              public router: Router) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        router.navigateByUrl('/app/tabs/(create:create)');
      } else {
        console.log("Signed Out");
      }
    });
  }

  ngOnInit() {
  }

  signIn(): void {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .catch(function(error) {  
      console.log(error);
    });
  }
}
