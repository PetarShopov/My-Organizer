import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html'
})
export class TitleSearchComponent {

  title: string;

  @Output() titleFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
      this.title = '';
  }

  onKey(event: any) {
        this.title = event.target.value;
        this.titleFilter.emit(this.title);
    }
}
