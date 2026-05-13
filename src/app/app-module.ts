import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Second } from './second/second';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDirective } from './my-directive';
import { Widok1 } from './widok1/widok1';
import { Widok2 } from './widok2/widok2';
import { Widok3 } from './widok3/widok3';
import { Menu } from './menu/menu';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    App,
    Second,
    MyDirective,
    Widok1,
    Widok2,
    Widok3,
    AppmMenu,
    ApmMenu,
    AppMenu,
    Menu,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), {provide: 'LOCALE_ID', useValue: 'pl-PL'}],
  bootstrap: [App],
})
export class AppModule {}
