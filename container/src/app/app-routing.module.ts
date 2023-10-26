import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'child12',
    children: [
      {
        path: '**',
        loadChildren: () =>
          import('./spa-host/spa-host.module').then((m) => m.SpaHostModule),
        data: { app: 'child12' },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
