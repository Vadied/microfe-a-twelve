import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroFrontendRouteReuseStrategy } from '../services/route-reuse-strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: MicroFrontendRouteReuseStrategy
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
