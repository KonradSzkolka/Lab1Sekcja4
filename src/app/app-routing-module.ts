import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'widok-1',component:widok1}
  {path: 'widok-1',component:widok2}
  {path: 'widok-1',cloadComponent:()=>import('./widok3/widok3').then(m=>m.widok3)}
  {path: 'people', loadChildren: () => import('./people/people-module').then(m => m.PeopleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
