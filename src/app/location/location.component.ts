import {Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Location} from "../dtos/Location";
import {LocationService} from "../service/location.service";
import {map} from "rxjs";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Array<Location>;


  constructor(private locationService: LocationService) {
    this.locations = new Array<Location>;
  }

  ngOnInit() {
    this.getLocations()
  }

  private getLocations() {
    this.locationService.getLocations()
      .pipe(
        map(res => {
          // @ts-ignore
          return new Location(res['address'], res['openCloseHours']);
        })
      )
      .subscribe(data => this.locations.push(data))
  }

}
