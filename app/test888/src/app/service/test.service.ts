
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { SurbtcMarket } from '../interface/surbtcmarket';
import { Jsonhoder } from '../interface/jsonhoder';
// import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(
    private http: HttpClient) { }


  getTodo() {
    return this.http.get<Jsonhoder[]>("https://jsonplaceholder.typicode.com/todos")
  }

  // getLivesoccer(): Observable<SurbResult> {
  //   return this.http.get<any>("https://www.livesoccer888.com/portal/JSonData/GER/results.json")
  // }
}

export class SurbtcService {

  constructor(private http: HttpClient, 
    // private surBtcMarket: SurbtcMarket
    ) { }

  // public getPricess(): Observable<SurbtcMarket> {
  //   return this.http.get<any>("https://www.livesoccer888.com/portal/JSonData/GER/results.json")
  // }

}
