import { AppComponent } from './../app.component';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NoteService } from '../services/note.service';
import { INote } from './note';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {

  pageTitle: string;
  sort: string;
  order: string;
  pattern: string;
  notes: INote[];
  private errorMessage: any;
  private currentUser = sessionStorage.getItem('username');

  constructor(
    private noteService: NoteService,
  private router: Router) {
    this.pageTitle = 'Notes';
    this.notes = [];
    this.pattern = '';
   }

   ngOnInit() {
    this.noteService.getNotes()
    .subscribe(
      notes => this.notes = notes,
      error => this.errorMessage = <any>error
    );
  }

  @Input('sortBy') set sortBy(sortBy: string) {
      this.sort = sortBy;
      this.pattern = this.pattern || '';
  }

  @Input('orderBy') set orderBy(orderBy: string) {
      this.order = orderBy;
      this.pattern = this.pattern || '';
  }

  @Input('pattern') set titleFilter(titleFilter: string) {
      this.pattern = titleFilter || '';
  }
  
  

  deleteCurrentNote(_id: string) {
      this.noteService.deleteNote(_id)
          .subscribe(
              userInfo => {
                this.router.navigate(['/Notes']);
              },
              () => {
                console.log('Error occurred');
              }
          );
  }
}

