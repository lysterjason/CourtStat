import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    
    constructor(public afAuth: AngularFireAuth){}

    registerUser(email: string, password: string): void {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string): any {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {  
            console.log(error.code);
            if (error.code == 'auth/wrong-password') {
                return 'Incorrect password or username';
            }
        });
    }

}
