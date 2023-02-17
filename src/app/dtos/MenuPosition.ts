export class MenuPosition {
  private readonly name: string;
  private readonly description: string;
  private readonly price: number;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.price = (obj && obj.price) || 0;
    this.description = (obj && obj.description) || '';
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }
}
