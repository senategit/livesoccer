import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// livesoccer888
import { FooterComponent } from './component/livesoccer/footer/footer.component';
import { HomeComponent } from './component/livesoccer/home/home.component';
import { NewComponent } from './component/livesoccer/new/new.component';
import { ReadNewComponent } from './component/livesoccer/read-new/read-new.component';
import { ResultComponent } from './component/livesoccer/result/result.component';
import { FixtureComponent } from './component/livesoccer/fixture/fixture.component';
import { TableComponent } from './component/livesoccer/table/table.component';
import { AnalyzeComponent } from './component/livesoccer/analyze/analyze.component';
import { ReadAnalyzeComponent } from './component/livesoccer/read-analyze/read-analyze.component';
import { MenuComponent } from './component/livesoccer/menu/menu.component';


// premierleague ENG
import { PremierComponent } from './component/premierleague/premier/premier.component';
import { New2Component } from './component/premierleague/new2/new2.component';
import { MatchComponent } from './component/premierleague/match/match.component';
import { Analyze2Component } from './component/premierleague/analyze2/analyze2.component';
import { Table2Component } from './component/premierleague/table2/table2.component';
import { StatisComponent } from './component/premierleague/statis/statis.component';
import { TapTopComponent } from './component/premierleague/tap-top/tap-top.component';
import { StarComponent } from './component/premierleague/star/star.component';
import { AssistComponent } from './component/premierleague/assist/assist.component';
import { CleanSheetComponent } from './component/premierleague/clean-sheet/clean-sheet.component';

// bundesliga GER
import { NewGerComponent } from './component/bundesliga/new-ger/new-ger.component';
import { BundesligaComponent } from './component/bundesliga/bundesliga/bundesliga.component';
import { MatchGerComponent } from './component/bundesliga/match-ger/match-ger.component';
import { AnalyzeGerComponent } from './component/bundesliga/analyze-ger/analyze-ger.component';
import { TableGerComponent } from './component/bundesliga/table-ger/table-ger.component';
import { StatisGerComponent } from './component/bundesliga/statis-ger/statis-ger.component';
import { ReportComponent } from './component/livesoccer/report/report.component';
import { TapAnalyzaComponent } from './component/livesoccer/tap-analyza/tap-analyza.component';
import { TapBeforeComponent } from './component/livesoccer/tap-before/tap-before.component';
import { TapAfterComponent } from './component/livesoccer/tap-after/tap-after.component';
import { TapNameComponent } from './component/livesoccer/tap-name/tap-name.component';

// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NewComponent,
    ResultComponent,
    FixtureComponent,
    TableComponent,
    AnalyzeComponent,
    MenuComponent,
    PremierComponent,
    New2Component,
    MatchComponent,
    Analyze2Component,
    Table2Component,
    StatisComponent,
    TapTopComponent,
    StarComponent,
    AssistComponent,
    CleanSheetComponent,
    NewGerComponent,
    BundesligaComponent,
    MatchGerComponent,
    AnalyzeGerComponent,
    TableGerComponent,
    StatisGerComponent,
    ReadNewComponent,
    ReadAnalyzeComponent,
    ReportComponent,
    TapAnalyzaComponent,
    TapBeforeComponent,
    TapAfterComponent,
    TapNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
