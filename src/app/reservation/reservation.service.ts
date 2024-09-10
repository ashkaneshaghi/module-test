import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    private reservations: Reservation[] = [];

    addReservation(reservation: Reservation) {
        this.reservations = this.getReservations();
        reservation.id = new Date().getTime().toString();
        this.reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

    getReservations(): Reservation[] {
        let reservations = localStorage.getItem('reservations');
        this.reservations = reservations ? JSON.parse(reservations) : [];
        return this.reservations;
    }

    getReservationById(reservationId: string): Reservation | undefined {
        let reservation = this.reservations.find(reservation => reservation.id === reservationId);
        return reservation;
    }

    deleteReservation(reservationId: string): void {
        let index = this.reservations.findIndex(reservation => reservation.id === reservationId);
        this.reservations.splice(index, 1);
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

    updateReservation(reservationId: string, reservation: Reservation): void {
        let index = this.reservations.findIndex(reservation => reservation.id === reservationId);
        this.reservations[index].checkInDate = reservation.checkInDate;
        this.reservations[index].checkOutDate = reservation.checkOutDate;
        this.reservations[index].guestName = reservation.guestName;
        this.reservations[index].guestEmail = reservation.guestEmail;
        this.reservations[index].roomNumber = reservation.roomNumber;
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
}
