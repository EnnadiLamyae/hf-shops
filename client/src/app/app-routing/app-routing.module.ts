import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from '../shops/shops.component';
import { HomeComponent } from '../home/home.component';
import { PreferredShopsComponent } from '../preferred-shops/preferred-shops.component';
import { AuthGuardService } from '../auth-guard.service';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'unauthorized' , component: UnauthorizedComponent},
  { path: '**',component: PageNotFoundComponent},
  { path: 'shops',canActivate: [AuthGuardService],  component: ShopsComponent },
  { path: 'preferredShops', canActivate: [AuthGuardService], component: PreferredShopsComponent}
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
