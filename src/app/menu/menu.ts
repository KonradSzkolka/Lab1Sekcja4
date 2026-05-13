import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styles: ``,
})
export class Menu {
  private Mytype: MyType = 'wartosc1';
}

type MyType = 'wartosc1' | 'wartosc2' | 'wartosc3';
