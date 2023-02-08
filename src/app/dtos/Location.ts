export class Location{
  private readonly address: string;
  private readonly openCloseHours: string;


  constructor(obj?: any) {
    this.address = (obj && obj.address) || '';
    this.openCloseHours = (obj && obj.openCloseHours) || '';
  }

  getAddress(): string {
    return this.address;
  }

  getOpenCloseHours(): string {
    return this.openCloseHours;
  }
}
