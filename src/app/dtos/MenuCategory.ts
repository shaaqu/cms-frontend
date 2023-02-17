export class MenuCategory {

  private readonly id: number;
  private readonly category: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.category = (obj && obj.category) || '';
  }


  getId(): number {
    return this.id;
  }

  getCategory(): string {
    return this.category;
  }
}
