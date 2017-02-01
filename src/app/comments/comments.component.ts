import {Component, Input, OnInit } from '@angular/core';
import { IComment } from './Comments';
import { CommentsService } from '../services/comments.service';
import { Router } from '@angular/router';

@Component({
    selector : 'comment-box',
    templateUrl : './comments.component.html',
    styleUrls : [ './comments.component.css' ],
    providers : [ CommentsService ]
})

export class CommentsComponent implements OnInit {
    comments: IComment[];
    private commentService: CommentsService;
    @Input() noteId: string;
    errorMessage: any;
    private currentUser = sessionStorage.getItem('username');

    commentData = {
        content: ''
    };

    constructor(commentService: CommentsService, private router: Router) {
        this.commentService = commentService;
    }

    addComment() {
        const { content } = this.commentData;
        this.commentData['author'] = sessionStorage.getItem('username');
        this.commentData['noteId'] = this.noteId;
        this.commentService.postComment(this.commentData)
            .subscribe(
                () => {
                        this.router.navigate(['/notes']);
                },
                        error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.commentService.getComments(this.noteId)
            .subscribe(
                commentsArr => {
                    for (let i = 0; i < commentsArr.length; i++) {
                        let comment = commentsArr[i];
                        if (comment.noteId !== this.noteId) {
                            commentsArr.splice(i, 1);
                            i--;
                        }
                    }
                    this.comments = commentsArr;
                },
                        error => this.errorMessage = <any>error
            );
    }

    deleteComment(_id: string) {
      this.commentService.deleteComment(_id)
          .subscribe(
              userInfo => {
                this.router.navigate(['/notes']);
              },
              () => {
                console.log('Error occurred');
              }
          );
  }
}
