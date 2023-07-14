import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit{
 
  constructor (private matDialog:MatDialog, private formbuilder:FormBuilder, private router:Router,private api: ApiService){}
    

  openDialog(){
    this.matDialog.open(DialogboxComponent,{
      width:'350px',
    })
  }
  dialog!: FormGroup;

  
 
  ngOnInit(): void {
    this.dialog = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      text: ['', Validators.required],
    });

    
  }

  save() {
    if (this.dialog.valid) {
      this.api.dialog(this.dialog.value).subscribe({
        next: (res) => {
          alert('Will Contact You Soon');
          this.dialog.reset();
          
        },
        error: (error) => {
          
         
          alert('Error while adding the details');
          this.dialog.reset();
        },
      });
    }
    console.log(this.dialog.value)
  }
}
