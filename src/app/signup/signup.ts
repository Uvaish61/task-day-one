import { Component } from '@angular/core';
import { CommonModule } from  '@angular/common';
import {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import{STD_CODES,StdCode} from './std-code';
//import { email } from '@angular/forms/signals';
@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css','../login/login.css'],
})
export class Signup {
  name = '';
  surname = '';
  stdCode = '';
  phone = '';
 altPhone = ''; 
 email='';
 password='';
 confirmPassword='';
 fatherName = '';
 dob = '';
 gender ='';
 address1 = '';
 address2 = '';

 stdCodes:StdCode[]= STD_CODES;
 constructor(private router: Router){

 }
  signup(){
    if (this.password !==this.confirmPassword){
      alert('Passwords do not match');
      return;
    }

    const newUser = {
      name: this.name,
      surname: this.surname,
      fatherName: this.fatherName,
      dob:this.dob,
      stdCode: this.stdCode,
      phone: this.phone,
      altPhone: this.altPhone,
      gender:this.gender,
      address1:this.address1,
      address2:this.address2,
      email: this.email,
      password: this.password
    };
    const users =JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = users.find((u: any) => u.email === this.email);

if (userExists){
   alert('Email already registered');
   return;

}
   users.push(newUser);
   localStorage.setItem('users', JSON.stringify(users));

   alert('signup successfull');

   this.router.navigate(['/'])

}
  }

