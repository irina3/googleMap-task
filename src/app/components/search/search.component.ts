import {Component, Input, OnInit} from '@angular/core';
import {EventsService} from '../../services/events.service';
export interface IEvent {
  pagination: any;
  events: any;
  location: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  eventsData = {};
  public searchContent: string;
  venuesIds = [];
  markers = [];
  zoom = 10;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
  }
  search(content?: string) {
    if (content) {
      this.eventsService.search(this.searchContent).subscribe((resEvents) => this.eventsData = resEvents);
      this.getVenuesId();
      this.getMarkers();
    } else {
      return;
    }

  }
  getVenuesId () {
    this.venuesIds = this.eventsData['events'] && this.eventsData['events'].map(item => item.venue_id);
  }
  getMarkers() {
    if (this.venuesIds) {
      this.venuesIds.forEach((id) => this.eventsService.getEvent(id).subscribe((data: any) => this.markers.push({
        latitude: data.latitude,
        longitude: data.longitude,
        name: data.name})));
    }
  }
  clickedMarker(marker, i) {

  }

}
