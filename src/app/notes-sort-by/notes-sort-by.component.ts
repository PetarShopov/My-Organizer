import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-sort-by',
  templateUrl: './notes-sort-by.component.html'
})
export class NotesSortByComponent {

  values: string[];

  @Output() selectSort: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.values = ['Title', 'Date'];
  }

  selectItem(value: string) {
        this.selectSort.emit(value);
    }

}
