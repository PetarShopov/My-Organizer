import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Kinvey } from './Kinvey'
import {IComment} from "../comments/Comments";

@Injectable()
export class CommentsService {
    private dbUrl: string = Kinvey.baseUrl + 'appdata/' + Kinvey.appKey + '/comments';

    private authToken: string = 'cdb8bbeb-4610-41b3-ad21-abf601e259e6.wMbH5kFktnXyyibljavXNrlSjqJ2enH7X/zV6mPMlBQ=';
    private headers: Headers = new Headers({});

    constructor(private http: Http) {}

    postComment(data) {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'));
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.dbUrl, JSON.stringify(data), options)
    }

    getComments(noteId : string): Observable<IComment[]> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization','Kinvey ' + sessionStorage.getItem('authToken'));
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.dbUrl, options)
            .map((response: Response) => <IComment[]>response.json());
    }

    deleteComment(_id: string) {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({
      'Authorization': `Kinvey ` +  sessionStorage.getItem('authToken')
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(url, options)
        .map((response: Response) => <IComment>response.json());
  }

}
