import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrasTravel';

  constructor(private dialog: MatDialog){}

  opendialog(){
    return this.dialog.open(DialogboxComponent,{
      width:'350px'
    })
  }
}
