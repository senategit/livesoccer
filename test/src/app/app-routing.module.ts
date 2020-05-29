import { Analyze2Component } from './component/premierleague/analyze2/analyze2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module'


import { FooterComponent } from './component/footer/footer.component';
import { NewComponent } from './component/new/new.component';
import { FixtureComponent } from './component/fixture/fixture.component';
import { ResultComponent } from './component/result/result.component';
import { AnalyzeComponent } from './component/analyze/analyze.component';
import { TableComponent } from './component/table/table.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { PremierComponent } from './component/premierleague/premier/premier.component';
import { New2Component } from './component/premierleague/new2/new2.component';
import { MatchComponent } from './component/premierleague/match/match.component';
import { Table2Component } from './component/premierleague/table2/table2.component';
import { StatisComponent } from './component/premierleague/statis/statis.component';
import { StarComponent } from './component/premierleague/star/star.component';
import { AssistComponent } from './component/premierleague/assist/assist.component';
import { CleanSheetComponent } from './component/premierleague/clean-sheet/clean-sheet.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'new', component: NewComponent},
  {path: 'analyze', component: AnalyzeComponent},
  {path: 'fixture', component: FixtureComponent},
  {path: 'result', component: ResultComponent},
  {path: 'table', component: TableComponent},
  {path: 'menu', component: MenuComponent},

  {path: 'premier', component: PremierComponent},
  {path: 'new2', component: New2Component},
  {path: 'analyze2', component: Analyze2Component},
  {path: 'match', component: MatchComponent},
  {path: 'table2', component: Table2Component},
  {path:  'statis', component: StatisComponent},  

  {path:  'star', component: StarComponent},     
  {path:  'assist', component: AssistComponent},     
  {path:  'clean-sheet', component: CleanSheetComponent},     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
