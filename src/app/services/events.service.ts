import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsService {

  constructor(public http: HttpClient) { }
  getAllEvents() {
    return this.http.get(`https://www.eventbriteapi.com/v3/events/search/?token=75QYHNXB7JI5BRI6LMFK`) as Observable<any>;
  }
  search(content: string) {
    return this.http.get(`https://www.eventbriteapi.com/v3/events/search/?token=75QYHNXB7JI5BRI6LMFK&location.address=${content}`)  as Observable<any>;
  }
  getEvent (id) {
    return this.http.get(`https://www.eventbriteapi.com/v3/venues/${id}/?token=75QYHNXB7JI5BRI6LMFK`) as Observable<any>;
  }

}
