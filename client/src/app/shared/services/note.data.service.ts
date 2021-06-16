import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actionRoutes, controllerRoutes } from '../constants/url.constants';
import { Note } from '../models/note.model';
import { BaseDataService } from './base.data.service';

@Injectable({ providedIn: 'root' })
export class NoteDataService extends BaseDataService {
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, controllerRoutes.note);
  }

  public changeNote(note: Note): Observable<Note> {
    return this.sendPostRequest(JSON.stringify(note), actionRoutes.noteUpdate);
  }

  public deleteNote(id: number): Observable<any> {
    return this.sendDeleteRequest({}, actionRoutes.noteDelete);
  }
  public createNote(order: number): Observable<Note> {
    return this.sendPostRequest(order, actionRoutes.noteCreate);
  }
}
