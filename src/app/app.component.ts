import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from './login-popup/login-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openLoginPopup(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '300px'
    });
  }
}
