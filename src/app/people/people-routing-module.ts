<<<<<<< HEAD
import { Component, NgModule } from "@angular/core";
import { ROUTER_CONFIGURATION, RouterModule } from "@angular/router";
import { PersonComponent } from "../person/person";

const Routes = [
    {path: '', component: People}
    {path: ':id', component: PersonComponent}
];

@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule {}
=======
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { People } from "./people/people";
import { PersonComponent } from "./person/person";

const routes: Routes = [
    { path: '', component: People },
    { path: 'tabela', component: People },
    { path: ':id', component: PersonComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppPeopleRoutingModule { }
>>>>>>> aa1a741e6403deee925e2335cd8867f5ef1f992d
