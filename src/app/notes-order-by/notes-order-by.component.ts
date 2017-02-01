import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-order-by',
  templateUrl: './notes-order-by.component.html'
})
export class NotesOrderByComponent {

  values: string[];

  @Output() selectOrder: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.values = ['Ascending', 'Descending']
   }

  selectItem(value: string) {
        this.selectOrder.emit(value);
    }
}
