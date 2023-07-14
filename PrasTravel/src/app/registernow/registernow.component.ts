import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-registernow',
  templateUrl: './registernow.component.html',
  styleUrls: ['./registernow.component.css']
})
export class RegisternowComponent {
  register!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    
    
    private router: Router,
    private api: ApiService,
    
  ) {}
  ngOnInit(): void {
    this.register = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      destination: ['', Validators.required],
    });

    
  }

  submit() {
    if (this.register.valid) {
      this.api.signup(this.register.value).subscribe({
        next: (res) => {
          alert('User added successfully');
          this.register.reset();
          
        },
        error: (error) => {
          
         
          alert('Error while adding the user');
          this.register.reset();
        },
      });
    }
    console.log(this.register.value)
  }
}
