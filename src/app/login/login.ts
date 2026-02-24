import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl:'./login.html',
  styleUrls:['./login.css']
})
export class LoginPage{
   email=""
   password=""
  login(){

  }
}