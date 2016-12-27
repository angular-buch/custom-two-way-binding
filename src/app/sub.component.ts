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
  value: string;

  @Output() myBindingChange = new EventEmitter<any>();
  @Input() get myBinding() {
    return this.value;
  }

  set myBinding(v: string) {
    this.value = v;
    this.myBindingChange.emit(this.value);
  }
}
