import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-read-new',
  templateUrl: './read-new.component.html',
  styleUrls: ['./read-new.component.css']
})
export class ReadNewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
