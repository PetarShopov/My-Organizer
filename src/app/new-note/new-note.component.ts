import { NoteService } from './../services/note.service';
import { Component } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})

export class NewNoteComponent {
  noteData = {
    title: "",
    image:'',
    category: '',
    content: '',
    creator: ''
  }

  constructor(private noteService:NoteService,private router:Router) {}

  createNote() {
    this.noteData.creator = sessionStorage.getItem('username');

    this.noteService.postNote(this.noteData)
      .subscribe(
        res => this.router.navigate(['notes']),
        err => console.log(err)
      )
  }

  reset(form) {
    form.reset();
    return false;
  }

}
