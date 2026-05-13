import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

@NgModule({
  declarations: [],
  imports: [CommonModule],
=======
import { People } from './people/people';
import { AppPeopleRoutingModule } from './people-routing-module';
import { AgePipe } from './age-pipe';
import { PersonComponent } from './person/person';

@NgModule({
  declarations: [People, AgePipe, PersonComponent],
  imports: [CommonModule, AppPeopleRoutingModule],
>>>>>>> aa1a741e6403deee925e2335cd8867f5ef1f992d
})
export class PeopleModule {}
