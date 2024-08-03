import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      id: [Date.now(), Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let idAsNumber: number = +id;
      this.reservationService
        .getReservation(idAsNumber)
        .subscribe((reservation) => {
          if (reservation) {
            this.reservationForm.patchValue(reservation);
          }
        });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        this.reservationService.updateReservation(reservation).subscribe(() => {
          console.log('Put request got processed');
        });
      } else {
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log('Post request got processed');
        });
      }
      this.router.navigate(['/list']);
    }
  }
}
