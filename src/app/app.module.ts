import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {EventsService} from "./services/events.service";
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9y_8J4cFiLjYTOGTxYJ_nWxSIv6mmDDw'
    })
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
