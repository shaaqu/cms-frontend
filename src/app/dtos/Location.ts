export class Location{
  private readonly _address: string;
  private readonly _openCloseHours: string;

  constructor(obj?: any) {
    this._address = obj.address;
    this._openCloseHours = obj.openCloseHours;
  }

  get address(): string {
    return this._address;
  }

  get openCloseHours(): string {
    return this._openCloseHours;
  }
}
