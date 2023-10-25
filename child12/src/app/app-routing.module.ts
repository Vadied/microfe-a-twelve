import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [/*{
  path: 'child2',
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
    }]
}, */{
  path: '**',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/child12' }],
})
export class AppRoutingModule {}
