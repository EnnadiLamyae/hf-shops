import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from '../shops/shops.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'shops',  component: ShopsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
