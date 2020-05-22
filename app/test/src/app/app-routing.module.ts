import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FooterComponent } from './componnet/footer/footer.component';
import { NewComponent } from './componnet/new/new.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'footer' },

  {path: 'footer', component: FooterComponent},
  {path: 'new', component: NewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
