import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [{
  path: 'child7',
  children: [
    /**
     * All routes specific to this app go here.
     */
    /*{
      path: 'page1',
      component: Page1Component
    }, {
      path: 'page2',
      component: Page2Component
    }*/]
}, {
  path: '**',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/child7' }],
})
export class AppRoutingModule { }
