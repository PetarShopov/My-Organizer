import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ITask } from '../tasks/task';

import { Kinvey } from './Kinvey';

@Injectable()
export class TaskService {
    private dbUrl: string = Kinvey.baseUrl + 'appdata/' + Kinvey.appKey + '/tasks';

    private appAuthToken: string;

    private headers: Headers = new Headers({});

    constructor(private http: Http) { }

    getTasks(): Observable<ITask[]> {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.dbUrl, options)
      .map((response: Response) => <ITask[]>response.json())
      .catch(this.handleError);
  }

  postTask(data) {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' })
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'))
    let options = new RequestOptions({ headers: headers })

    return this.http.post(this.dbUrl, JSON.stringify(data), options)
      .map(this.handleError)
      .catch(err => Observable.throw(err))
  }

  getTask(_id: string): Observable<any> {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'))
    let options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteTask(_id: string) {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({
      'Authorization': `Kinvey ` +  sessionStorage.getItem('authToken')
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(url, options)
        .map((response: Response) => <ITask>response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}