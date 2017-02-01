export interface INote {
  _id: string;
  title: string;
  content: string;
  image: string;
}

export class Note implements INote {
  _id: string;
  title: string;
  content: string;
  image: string;

  constructor(
    title: string,
    content: string,
    image: string,
  ) {
    this.title = title;
    this.content = content;
    this.image = image;
  }
}
