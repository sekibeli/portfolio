import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImpressumComponent } from './impressum/impressum.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
