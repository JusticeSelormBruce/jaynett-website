import { Data } from './../../../../data';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
  code;
  constructor(public data: Data) { 
    this.data.contact.forEach(item =>{
      this.code = item.dial_code
    })
  }
  contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    phone: new FormControl('',Validators.required),
    code: new FormControl(this.code,Validators.required),
    message: new FormControl('',Validators.required),


  });
  ngOnInit() {
  }

  

  submitForm(data){
    console.log(data.value)
  }
}
