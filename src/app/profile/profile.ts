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
    
        {
          "name" : "AyeLmao",
          "id" : "ayelmao",
          "leagueLeader" : "xXDragonSlayerXx",
          "players" : 13,
          "totalLeaguePoints" : 21320
        },
        {
          "name" : "Joe Colbourne Railers",
          "id" : "joe colbourne railers",
          "leagueLeader" : "Jason Lyster",
          "players" : 17,
          "totalLeaguePoints" : 25680
        },
        {
          "name" : "The Boys",
          "id" : "the boys",
          "leagueLeader" : "John Stamos",
          "players" : 7,
          "totalLeaguePoints" : 13853
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

  showInfo(leagueId) {
      if(leagueId==="ayelmao"){
        
      }
  }

}



