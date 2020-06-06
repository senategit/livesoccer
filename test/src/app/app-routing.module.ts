import { Analyze2Component } from './component/premierleague/analyze2/analyze2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module'


// livesoccer 888
import { FooterComponent } from './component/livesoccer/footer/footer.component';
import { NewComponent } from './component/livesoccer/new/new.component';
import { FixtureComponent } from './component/livesoccer/fixture/fixture.component';
import { ResultComponent } from './component/livesoccer/result/result.component';
import { AnalyzeComponent } from './component/livesoccer/analyze/analyze.component';
import { ReadAnalyzeComponent } from './component/livesoccer/read-analyze/read-analyze.component';
import { TableComponent } from './component/livesoccer/table/table.component';
import { HomeComponent } from './component/livesoccer/home/home.component';
import { MenuComponent } from './component/livesoccer/menu/menu.component';
import { ReadNewComponent } from './component/livesoccer/read-new/read-new.component';
import { ReportComponent } from './component/livesoccer/report/report.component';


// premierleague ENG
import { PremierComponent } from './component/premierleague/premier/premier.component';
import { New2Component } from './component/premierleague/new2/new2.component';
import { MatchComponent } from './component/premierleague/match/match.component';
import { Table2Component } from './component/premierleague/table2/table2.component';
import { StatisComponent } from './component/premierleague/statis/statis.component';
import { StarComponent } from './component/premierleague/star/star.component';
import { AssistComponent } from './component/premierleague/assist/assist.component';
import { CleanSheetComponent } from './component/premierleague/clean-sheet/clean-sheet.component';

// bundesliga GER
import { NewGerComponent } from './component/bundesliga/new-ger/new-ger.component';
import { BundesligaComponent } from './component/bundesliga/bundesliga/bundesliga.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // livesoccer888
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'new', component: NewComponent },
  { path: 'read-new', component: ReadNewComponent},
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'read-analyze', component: ReadAnalyzeComponent },
  { path: 'fixture', component: FixtureComponent },
  { path: 'result', component: ResultComponent },
  { path: 'table', component: TableComponent },
  { path: 'menu', component: MenuComponent },


  // premierleague ENG
  { path: 'premier', redirectTo: 'premier/new2' },
  { path: 'premier', component: PremierComponent },
  { path: 'new2', component: New2Component },
  { path: 'analyze2', component: Analyze2Component },
  { path: 'match', component: MatchComponent },
  { path: 'table2', component: Table2Component },
  { path: 'statis', component: StatisComponent },
  { path: 'star', component: StarComponent },
  { path: 'assist', component: AssistComponent },
  { path: 'clean-sheet', component: CleanSheetComponent },
  { path: 'report', component: ReportComponent},

  // bundesliga GER
  { path: 'bundesliga', redirectTo: 'bundesliga/new' },
  { path: 'bundesliga/new', component: BundesligaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
