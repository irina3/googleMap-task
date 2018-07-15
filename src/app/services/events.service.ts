import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IEvent} from '../components/search/search.component';

@Injectable()
export class EventsService {

  constructor(public http: HttpClient) { }
  getAllEvents() {
    return this.http.get(`https://www.eventbriteapi.com/v3/events/search/?token=75QYHNXB7JI5BRI6LMFK`) as Observable<IEvent[]>;
  }
  search(content: string) {
    return this.http.get(`https://www.eventbriteapi.com/v3/events/search/?token=75QYHNXB7JI5BRI6LMFK&location.address=${content}`)  as Observable<IEvent[]>;
  }
  getEvent (id) {
    return this.http.get(`https://www.eventbriteapi.com/v3/venues/${id}/?token=75QYHNXB7JI5BRI6LMFK`) as Observable<any>;
  }

}
