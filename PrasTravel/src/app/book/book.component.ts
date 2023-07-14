import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    
    
    private router: Router,
    private api: ApiService,
    
  ) {}
  ngOnInit(): void {
    this.book = this.formbuilder.group({
      whereto: ['', Validators.required],
      howmany: ['', Validators.required],
      arrival: ['', Validators.required],
      leaving: ['', Validators.required],
      entername: ['', Validators.required],
    });

    
  }

     booknow() {
    if (this.book.valid) {
      this.api.book(this.book.value).subscribe({
        next: (res) => {
          alert('Successfully Booked');
          this.book.reset();
          
        },
        error: (error) => {
          
         
          alert('Error while Booking');
          this.book.reset();
        },
      });
    }
    console.log(this.book.value)
  }

}
