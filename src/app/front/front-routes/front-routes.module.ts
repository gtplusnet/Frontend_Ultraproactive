import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';

import { FrontRoutesRoutingModule } from './front-routes-routing.module';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
  	{ path: '', component: HomeComponent },
  	{ path: 'login', component: LoginComponent },
  	{ path: 'about-us', component: AboutUsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class FrontRoutesModule { }
