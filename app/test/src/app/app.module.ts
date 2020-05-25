import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NewComponent } from './component/new/new.component';
import { ResultComponent } from './component/result/result.component';
import { FixtureComponent } from './component/fixture/fixture.component';
import { TableComponent } from './component/table/table.component';
import { AnalyzeComponent } from './component/analyze/analyze.component';
import { MenuComponent } from './component/menu/menu.component';

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
    MenuComponent
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
