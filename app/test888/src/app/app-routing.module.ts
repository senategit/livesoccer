import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// total
import { HomeComponent } from './component/home/home.component';
import { NewComponent } from './component/total/new/new.component';
import { AnalyzeComponent } from './component/total/analyze/analyze.component';
import { TableComponent } from './component/total/table/table.component';
import { MatchComponent } from './component/total/match/match.component'
import { HighlightsComponent } from './component/highlights/highlights.component';
import { MenuComponent } from './component/total/menu/menu.component';
import { ResultComponent } from './component/total/result/result.component';
import { New2Component } from './component/total/new2/new2.component';

// test
import { Test1Component } from './test/test1/test1.component';
import { Test3Component } from './test/test3/test3.component';
import { Test2Component } from './test/test2/test2.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'highlights', component: HighlightsComponent },

  // total
  { path: 'new', component: NewComponent },
  { path: 'new2', component: New2Component },
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'match', component: MatchComponent },
  { path: 'result', component: ResultComponent },
  { path: 'table', component: TableComponent },

  // Sub Menu
  { path: 'menu', component: MenuComponent },




  // TEST
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },


  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
