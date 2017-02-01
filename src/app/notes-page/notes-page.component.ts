
import { Component } from '@angular/core';

@Component({
  templateUrl: './notes-page.component.html'
})
export class NotesPageComponent {

  sortBy: string;

  orderBy: string;

  pattern: string;
    
  constructor() { 
    this.sortBy = 'date';
    this.orderBy = 'Descending';
    this.pattern = '';
  }

    sorting(value: string) {
        this.sortBy = value;
    }

    titleFilter(value: string) {
        this.pattern = value;
    }

    ordering(value: string) {
        this.orderBy = value;
    }
}
