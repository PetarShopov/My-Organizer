import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Observable } from 'rxjs/Observable';
import { AdventureModel } from './note.model';
import { Router, ActivatedRoute, Routes } from '@angular/router';

@Component({
  templateUrl: './note-details.component.html',
})
export class NoteDetailsComponent implements OnInit {

  note: any;

  errorMessage: string;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.note = '';
   }

  ngOnInit() {
    let noteId = this.route.snapshot.params['id'];
    this.getNote(noteId);
  }

  getNote(noteId: string) {
    this.noteService
    .getNote(noteId)
    .subscribe(
      data => this.note = data,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
        this.router.navigate(['/notes']);
    }

}
