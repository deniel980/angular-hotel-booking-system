import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, BookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    ReservationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
