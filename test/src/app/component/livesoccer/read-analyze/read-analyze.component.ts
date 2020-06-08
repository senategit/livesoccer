import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-read-analyze',
  templateUrl: './read-analyze.component.html',
  styleUrls: ['./read-analyze.component.css']
})
export class ReadAnalyzeComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
