import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ReservationComponent,
    MenuComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
