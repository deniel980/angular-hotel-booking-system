import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {
    // let savedReservations = localStorage.getItem('reservations');
    // this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }
  private apiUrl = 'http://localhost:3001';
  reservations: Reservation[] = [];

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }

  addReservation(newReservation: Reservation): Observable<void> {
    // this.reservations.push(newReservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));

    return this.http.post<void>(this.apiUrl + '/reservation', newReservation);
  }

  deleteReservation(id: number): Observable<void> {
    // let index = this.reservations.findIndex((res) => res.id === id);
    // this.reservations.splice(index, 1);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));

    return this.http.delete<void>(this.apiUrl + '/reservation/' + id);
  }

  updateReservation(updatedReservation: Reservation): Observable<void> {
    // let index = this.reservations.findIndex(
    //   (res) => res.id === updatedReservation.id
    // );
    // this.reservations[index] = updatedReservation;
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));

    return this.http.put<void>(
      this.apiUrl + '/reservation/' + updatedReservation.id,
      updatedReservation
    );
  }
}
