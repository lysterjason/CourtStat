import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  
  leagues: any[] = [
    
        "AyeLmao" : {
          "id" : "ayelmao",
          "league leader" : "xXDragonSlayerXx",
          "players" : 13,
          "total league points" : 21320
        },
        "Joe Colbourne Railers" : {
          "id" : "joe colbourne railers",
          "league leaders" : "Jason Lyster",
          "players" : 17,
          "total league points" : 25680
        },
        "The Boys" : {
          "id" : "the boys",
          "league leader" : "John Stamos",
          "players" : 7,
          "total league points" : 13853
        }
      
];

  userName$: Observable<any>

  constructor(public db: AngularFireDatabase) {} 

  getCurrentUser(): Observable<any>{
      return this.db.object('user/Jason/name')
        .valueChanges()
  }

  ngOnInit(): void {
    this.userName$ = this.getCurrentUser();
  }

  showInfo(leagueName) {
      
  }

}



