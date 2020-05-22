import { HttpClient } from '@angular/common/http';
import { TestService } from './../../service/test.service';
import { Component, OnInit } from '@angular/core';
import { SurbtcService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

 
  public dataresult:  Array<Result> = new Array<Result>();

  constructor(public http: HttpClient) {
    // console.log('hello');
    // this.surbtcService = surbtcService;
  }

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
