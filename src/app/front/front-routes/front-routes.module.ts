import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';

import { FrontRoutesRoutingModule } from './front-routes-routing.module';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
  	{ path: '', component: HomeComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class FrontRoutesModule { }
