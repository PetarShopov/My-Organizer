export interface ITask {
  _id: string;
  content: string;
}

export class Task implements ITask {
  _id: string;
  content: string;

  constructor(
    content: string,
  ) {
    this.content = content;
  }
}
