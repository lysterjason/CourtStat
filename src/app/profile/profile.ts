import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

  userName$: Observable<any>

  constructor(public db: AngularFireDatabase) {} 

  getCurrentUser(): Observable<any>{
      return this.db.object('user/Jason/name')
        .valueChanges()
  }

  ngOnInit(): void {
    this.userName$ = this.getCurrentUser();
  }

}



