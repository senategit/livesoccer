import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public dataresult:  Array<Result> = new Array<Result>();

  constructor(public http: HttpClient) { }

  ngOnInit() {
    return this.http.get("https://www.livesoccer888.com/portal/JSonData/GER/results.json").subscribe(
      data => {
        this.dataresult = (data as any).result ; 
        for (var user of this.dataresult) {
          console.log(user.league_name);
        }        
      },
      error=>{
        console.log(error);
      }
      )
  }

}
