export class Post {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _text: string;
  private readonly _img: string;
  constructor(obj?: any) {
    this._id = (obj && obj.id) || 0;
    this._title = (obj && obj.title) || '';
    this._text = (obj && obj.text) || '';
    this._img = (obj && obj.img) || '';
  }


  getId(): number {
    return this._id;
  }

  getTitle(): string {
    return this._title;
  }

  getText(): string {
    return this._text;
  }

  getImg(): string {
    return this._img;
  }
}
