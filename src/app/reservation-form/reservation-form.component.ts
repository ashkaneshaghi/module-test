import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

    reservationForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private reservationService: ReservationService
    ) { }

    ngOnInit(): void {
        this.reservationForm = this.formBuilder.group({
            checkInDate: ['', Validators.required],
            checkOutDate: ['', Validators.required],
            guestName: ['', Validators.required],
            guestEmail: ['', [Validators.required, Validators.email]],
            roomNumber: ['', Validators.required],
        });
    }

    onSubmit() {
        let reservation: Reservation = this.reservationForm.value;
        console.log(JSON.stringify(reservation));
        this.reservationService.addReservation(reservation);
    }
}
