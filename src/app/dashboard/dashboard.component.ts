import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public dialog: MatDialog) {}

  openLoginPopup(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '300px'
    });
  }
}
