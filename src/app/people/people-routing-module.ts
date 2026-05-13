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