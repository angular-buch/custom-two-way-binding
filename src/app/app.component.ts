import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>MyComponent: {{ foobar }}</p>
    <button (click)="foobar = 'AAA'">AAA</button>
    <button (click)="foobar = 'BBB'">BBB</button>

    <my-sub [(myBinding)]="foobar"></my-sub>
  `
})
export class AppComponent {
  foobar: string = '000';
}
