import { Component } from '@angular/core';
import { CommonModule } from  '@angular/common';
import {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import{STD_CODES,StdCode} from './std-code';
import { email } from '@angular/forms/signals';
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
 stdCodes:StdCode[]= STD_CODES;
 constructor(private router: Router){

 }
  signup(){
    if (this.password !==this.confirmPassword){
      alert('Passwords do not match');
    }

    const newUser = {
      name: this.surname,
      surname: this.surname,
      stdCode: this.stdCode,
      phone: this.phone,
      altPhone: this.altPhone,
      emaila: this.email,
      password: this.password
    };
    const users =JSON.parse(localStorage.getItem('user') || '[]');

const userExists = users.find((u: any) => u.email === this.email);
if (userExists){
   alert('Email already registered');
   return;


   users.push(newUser);
   localStorage.setItem('users', JSON.stringify(users));

   alert('signup successfull');

   this.router.navigate(['/'])

}
  }
}
