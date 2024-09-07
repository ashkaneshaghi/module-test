import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    private reservations: Reservation[] = [];

    addReservation(reservation: Reservation) {
        reservation.id = new Date().getTime().toString();
        this.reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
}
