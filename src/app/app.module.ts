import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrontRoutesModule } from './front/front-routes/front-routes.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './front/layout/layout.component';
import { HomeComponent } from './front/home/home.component';
import { AboutUsComponent } from './front/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FrontRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
