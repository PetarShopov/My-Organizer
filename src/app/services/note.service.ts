import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { INote } from '../notes/note';

import { Kinvey } from './Kinvey';

@Injectable()
export class NoteService {
    private dbUrl: string = Kinvey.baseUrl + 'appdata/' + Kinvey.appKey + '/post';

    private appAuthToken: string;

    private headers: Headers = new Headers({});

    constructor(private http: Http) { }

    getNotes(): Observable<INote[]> {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.dbUrl, options)
      .map((response: Response) => <INote[]>response.json())
      .catch(this.handleError);
  }

  postNote(data) {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' })
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'))
    let options = new RequestOptions({ headers: headers })

    return this.http.post(this.dbUrl, JSON.stringify(data), options)
      .map(this.handleError)
      .catch(err => Observable.throw(err))
  }

  getNote(_id: string): Observable<any> {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'))
    let options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteNote(_id: string) {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({
      'Authorization': `Kinvey ` +  sessionStorage.getItem('authToken')
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(url, options)
        .map((response: Response) => <INote>response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}