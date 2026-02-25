import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
//import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl:'./login.html',
  styleUrls:['./login.css']
})
export class LoginPage{
   email=""
   password="";
   constructor(private router:Router){}
  login(){
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const matchedUser = users.find((u: any) =>
      u.email === this.email.trim() && 
    u.password === this.password
  );
  if (!matchedUser){
    alert('Invalid email or password');
    return;
  }
   
   localStorage.setItem('currentUser',JSON.stringify(matchedUser))

   alert('Login successful');
 this.router.navigate(['/dashboard']);
  }
}