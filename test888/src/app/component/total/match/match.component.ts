
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {


  public datafixture:  Array<Fixture> = new Array<Fixture>();

  constructor(public http: HttpClient) { }

    ngOnInit() {
      return this.http.get("https://www.livesoccer888.com/portal/JSonData/GER/fixtures.json").subscribe(
        data => {
          this.datafixture = (data as any).fixtures ; 
          for (var user of this.datafixture) {
            console.log(user.league_name);
          }        
        },
        error=>{
          console.log(error);
        }
        )
    }
  


}

