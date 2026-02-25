import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {

  user: any;
  showProfile = false;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(private router: Router) {

  }

  canExit(): boolean {
    return confirm('Are you sure you want to leave the dashboard?');
  }

  logout() {
    if(this.isBrowser){
    localStorage.removeItem('currentUser');
    }
    this.router.navigate(['/']);
  }

 toggleProfile() {
  this.showProfile = !this.showProfile;
}

  ngOnInit() {
    if (this.isBrowser) {

      const storedUser = localStorage.getItem('currentUser');
      this.user = storedUser ? JSON.parse(storedUser) : null;
      return;
    }
    return ;
  }

}
