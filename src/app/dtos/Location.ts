export class Location{
  private readonly address: string;
  private readonly openCloseHours: string;


  constructor(address: string, openCloseHours: string) {
    this.address = address;
    this.openCloseHours = openCloseHours;
  }

  getAddress(): string {
    return this.address;
  }

  getOpenCloseHours(): string {
    return this.openCloseHours;
  }
}
