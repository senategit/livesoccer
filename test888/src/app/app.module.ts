
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/total/footer/footer.component';

// total
import { NewComponent } from './component/total/new/new.component';
import { AnalyzeComponent } from './component/total/analyze/analyze.component';
import { MatchComponent } from './component/total/match/match.component';
import { TableComponent } from './component/total/table/table.component';
import { MenuComponent } from './component/total/menu/menu.component'

import { HighlightsComponent } from './component/highlights/highlights.component';


// service 
import { TestService } from './service/test.service';


// test
import { Test1Component } from './test/test1/test1.component';
import { Test2Component } from './test/test2/test2.component';
import { Test3Component } from './test/test3/test3.component';
import { ResultComponent } from './component/total/result/result.component';
import { New2Component } from './component/total/new2/new2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NewComponent,
    AnalyzeComponent,
    MatchComponent,
    TableComponent,
    HighlightsComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    ResultComponent,
    MenuComponent,
    New2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  // providers: [],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
