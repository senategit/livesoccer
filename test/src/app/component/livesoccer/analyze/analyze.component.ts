import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  data_tab: any = [
    {
        'id_tab': 0,
        'active_tab': false
    },
    {
        'id_tab': 1,
        'active_tab': true
    },
    {
        'id_tab': 2,
        'active_tab': false
    },
    {
        'id_tab': 3,
        'active_tab': false
    },

    {
      'id_tab': 4,
      'active_tab': false
  }
]

  constructor() { }

  ngOnInit() {
  }

}
