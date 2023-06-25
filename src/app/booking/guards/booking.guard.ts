import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export const bookingGuard: CanDeactivateFn<BookingComponent> = 
(component, currentRoute, currentState, nextState) => {

  // constructor(private _snackBar: MatSnackBar); {}

  return component.bookingForm.pristine;
};
