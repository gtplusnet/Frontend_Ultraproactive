import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FrontRoutesModule } from './front/front-routes/front-routes.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './front/layout/layout.component';
import { HomeComponent } from './front/home/home.component';
import { AboutUsComponent } from './front/about-us/about-us.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { ProductComponent } from './front/product/product.component';
import { ProductContentComponent } from './front/product-content/product-content.component';
import { TestimonialComponent } from './front/testimonial/testimonial.component';
import { ContactUsComponent } from './front/contact-us/contact-us.component';
import { WhatIsMagnesiumComponent } from './front/what-is-magnesium/what-is-magnesium.component';
import { BenefitsComponent } from './front/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductContentComponent,
    TestimonialComponent,
    ContactUsComponent,
    WhatIsMagnesiumComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FrontRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
