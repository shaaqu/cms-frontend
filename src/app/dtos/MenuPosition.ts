export class MenuPosition {
  private _name: string;
  private _description: string;
  private _price: number;

  constructor(obj?: any) {
    this._name = (obj && obj._name) || '';
    this._price = (obj && obj._price) || 0;
    this._description = (obj && obj._description) || '';
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get price(): number {
    return this._price;
  }
}
