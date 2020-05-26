import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public result = new Array<Users>();

  constructor(
    private http: HttpClient,
) { }

  ngOnInit() {

    return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      data => {
        this.result = data as Array<Users>;
        for (var user of this.result) {
          console.log(user.address.street);
        }
      },
      error=>{
        console.log(error);
      }
      )
  }

}
