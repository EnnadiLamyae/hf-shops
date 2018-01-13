import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from '../shops/shops.component';
import { HomeComponent } from '../home/home.component';
import { PreferredShopsComponent } from '../preferred-shops/preferred-shops.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'shops',  component: ShopsComponent },
  { path: 'preferredShops',component: PreferredShopsComponent}
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
