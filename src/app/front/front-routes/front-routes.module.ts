import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProductComponent } from '../product/product.component';
import { ProductContentComponent } from '../product-content/product-content.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { WhatIsMagnesiumComponent } from '../what-is-magnesium/what-is-magnesium.component';
import { BenefitsComponent } from '../benefits/benefits.component';

import { FrontRoutesRoutingModule } from './front-routes-routing.module';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/product_content', component: ProductContentComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'what-is-magnesium', component: WhatIsMagnesiumComponent },
    { path: 'benefits-of-magnesium', component: BenefitsComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class FrontRoutesModule { }
