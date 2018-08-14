import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  league1:boolean = false;
  league2: boolean = false;
  league3: boolean = false;

  leagues: any[] = [
    {
        "LeagueName": "The Boys",
        "Players": "7",
        "LeagueLeader": "John Stamos",
        "TotalLeaguePoints": "13853"
    },
    {
        "LeagueName": "AyeLmao",
        "Players": "13",
        "LeagueLeader": "xXDragonSlayerXx",
        "TotalLeaguePoints": "21320"
    },
    {
        "LeagueName": "Joe Colbourne Railers",
        "Players": "17",
        "LeagueLeader": "Jason Lyster",
        "TotalLeaguePoints": "25680"
    },
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
      this.league1 = !this.league1;
  }

}



