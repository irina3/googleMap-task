import {Component, Input, OnInit} from '@angular/core';
import {EventsService} from '../../services/events.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  eventsData = {pagination: {}, events: [], location: {latitude: 4, longitude: 5, name: ''}};
  public searchContent: string;
  venuesIds = [];
  zoom = 10;
  lat = 5;
  lng = 6;
  markers = [{latitude: this.lat,
    longitude: this.lng,
    name: ''}];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
  }
  search(content?: string) {
    if (content) {
        this.eventsService.search(this.searchContent).subscribe((resEvents) => {
          this.eventsData = resEvents;
          this.lat = this.eventsData['location'].latitude;
          this.lng = this.eventsData['location'].longitude;
        });

      this.getVenuesId();
    } else {
      return;
    }

  }
  getVenuesId () {
    this.venuesIds = this.eventsData['events'] && this.eventsData['events'].map(item => item.venue_id);
    this.getMarkers();
  }
  getMarkers() {
    if (this.venuesIds) {
      this.markers = [];
      this.venuesIds.forEach((id) => this.eventsService.getEvent(id).subscribe((data: any) => this.markers.push({
        latitude: data.latitude,
        longitude: data.longitude,
        name: data.name})))
    }
  }
  clickedMarker(marker, i) {

  }

}
