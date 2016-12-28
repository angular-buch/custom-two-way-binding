import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-sub',
  template: `
    <p>SubComponent: {{ value }}</p>
    <button (click)="myBinding = 'CCC'">CCC</button>
    <button (click)="myBinding = 'DDD'">DDD</button>
  `,
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
  myBindingValue: string;

  @Output() myBindingChange = new EventEmitter<string>();
  @Input() get myBinding() {
    return this.myBindingValue;
  }

  set myBinding(v: string) {
    this.myBindingValue = v;
    this.myBindingChange.emit(this.myBindingValue);
  }
}
