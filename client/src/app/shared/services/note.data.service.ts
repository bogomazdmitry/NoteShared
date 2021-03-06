import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actionRoutes, controllerRoutes } from '../constants/url.constants';
import { NoteDesign } from '../models/note-design.model';
import { Note } from '../models/note.model';
import { BaseDataService } from './base.data.service';

@Injectable({ providedIn: 'root' })
export class NoteDataService extends BaseDataService {
  public constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, controllerRoutes.note);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.sendPostRequest(JSON.stringify(note), actionRoutes.noteUpdate);
  }

  public deleteNote(noteID: number): Observable<any> {
    return this.sendDeleteRequest({ noteID }, actionRoutes.noteDelete);
  }

  public createNote(order: number): Observable<Note> {
    return this.sendPostRequest(order, actionRoutes.noteCreate);
  }

  public updateNoteDesign(
    noteDesign: NoteDesign,
    noteID: number
  ): Observable<NoteDesign> {
    return this.sendPostRequest(
      JSON.stringify({ ...noteDesign, noteID }),
      actionRoutes.noteDesignUpdate
    );
  }

  public getSharedUsersEmails(noteTextID: number): Observable<string[]> {
    return this.sendGetRequest(
      { noteTextID },
      actionRoutes.notesSharedUsersEmails
    );
  }

  public deleteSharedUser(email: string, noteTextID: number): Observable<any> {
    return this.sendDeleteRequest(
      { email, noteTextID },
      actionRoutes.notesDeleteSharedUser
    );
  }
}
