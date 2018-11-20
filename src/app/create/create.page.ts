import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss']
})
export class CreatePage implements OnInit {

  constructor(public afAuth: AngularFireAuth,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  signOut(): any {
    this.afAuth.auth.signOut();
    this.router.navigate([''])
  }

}
