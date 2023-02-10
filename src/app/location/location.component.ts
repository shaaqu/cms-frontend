import {Component, OnInit } from '@angular/core';
import {Location} from "../dtos/Location";
import {LocationService} from "../service/location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[] = [];
  isComponentVisible: boolean;

  constructor(private locationService: LocationService) {
    this.isComponentVisible = false;
  }

  ngOnInit() {
    this.getLocations();
  }

  private getLocations() {
    this.locationService.getLocations()
      .subscribe(response => {
        this.isComponentVisible = response.length > 0;
        response.map((e: any) => this.locations.push(new Location(e)));
      })
  }

}
