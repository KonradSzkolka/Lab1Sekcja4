import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
const routes: Routes = [
  {path: 'widok-1',component:widok1}
  {path: 'widok-1',component:widok2}
  {path: 'widok-1',cloadComponent:()=>import('./widok3/widok3').then(m=>m.widok3)}
  {path: 'people', loadChildren: () => import('./people/people-module').then(m => m.PeopleModule)}
];
=======
const routes: Routes = [{
  path: 'osoby', loadChildren: () => import('./people/people-module').then(x => x.PeopleModule),
}, {
  path: '' , redirectTo: 'osoby', pathMatch: 'full'
}];
>>>>>>> aa1a741e6403deee925e2335cd8867f5ef1f992d

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
