import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { TasksComponent } from './tasks/tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'users/login', component: LoginComponent},
    { path: 'users/register', component: RegisterComponent},

    { path: 'users/new-note', component: NewNoteComponent, canActivate: [AuthGuard]},
    { path: 'notes/:id', component: NoteDetailsComponent, canActivate: [AuthGuard]},
    { path: 'notes', component: NotesPageComponent, canActivate: [AuthGuard]},
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]},
    { path: 'userPanel', component: UserPanelComponent, canActivate: [AuthGuard]},
    { path: '**', component: PageNotFoundComponent },
    ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
