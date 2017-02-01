import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-short',
  templateUrl: './note-short.component.html',
})
export class NoteShortComponent {

  title: string;
  
  image: string;
  
  content: string;
  
  creator: string;
  
  startDate: string;
  
  noteId: string;
  
  @Input('note') set note(note: any){
    this.title = note.title;
    this.image = note.image;
    this.content = note.content;
    this.creator = note.creator || 'Guest';
    this.startDate = note._kmd.lmt;
    this.noteId = note._id;
  }

}
