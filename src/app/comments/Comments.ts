export interface IComment {
    content: string;
    author: string;
    noteId: string;
}

export class Comment implements IComment {
    content: string;
    author: string;
    noteId: string;

    constructor(content: string, author: string, noteId: string) {
        this.content = content;
        this.author = author;
        this.noteId = noteId;
    }
}