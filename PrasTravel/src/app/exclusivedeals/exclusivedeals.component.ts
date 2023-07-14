import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-exclusivedeals',
  templateUrl: './exclusivedeals.component.html',
  styleUrls: ['./exclusivedeals.component.css']
})
export class ExclusivedealsComponent implements OnInit {

  hey!:any[];

  constructor(private api: ApiService){}
  ngOnInit(): void {
    this.exclusive();
  }
    exclusive(){
      return this.api.getexclusive().subscribe((res)=>{
        this.hey =res;
      })
    }
  
  }
