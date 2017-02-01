import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guards/auth.guard';
import { NoteShortComponent } from './note-short/note-short.component';
import { NotesOrderByComponent } from './notes-order-by/notes-order-by.component';
import { NotesSortByComponent } from './notes-sort-by/notes-sort-by.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

//services
import { UserService } from './services/user.service';
import { NoteService } from './services/note.service';
import { TaskService } from './services/task.service';
import { NewNoteComponent } from './new-note/new-note.component';

//Pipes
import { SortPipe } from './pipes/sort.pipe';
import { FilterTitlePipe } from './pipes/filter-title.pipe';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { CommentsComponent } from './comments/comments.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { TitleSearchComponent } from './title-search/title-search.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    SortPipe,
    FilterTitlePipe,

    AppComponent,
    NotesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    NewNoteComponent,
    NoteShortComponent,
    NotesOrderByComponent,
    NotesSortByComponent,
    NoteDetailsComponent,
    CommentsComponent,
    NotesPageComponent,
    TitleSearchComponent,
    UserPanelComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    UserService,
    NoteService,
    TaskService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
