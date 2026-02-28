import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  LucideAngularModule,
  Search,
  LayoutDashboard,
  User,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-angular';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule,LucideAngularModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  readonly searchIcon=Search;
  readonly dashboardIcon = LayoutDashboard;
  readonly profileIcon = User;
  readonly productsIcon = Package;
  readonly ordersIcon = ShoppingCart;
  readonly analyticsIcon = BarChart3;
  readonly settingsIcon = Settings;
  readonly logoutIcon = LogOut;

  user: any;
  showProfile = false;
  showSearch = false;
  isSidebarOpen: boolean = true;
  activeMenu: string = 'dashboard';
  toggleSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  products = [
    { name: 'Laptop', price: 750 },
    { name: 'Phone', price: 500 },
    { name: 'Headphones', price: 120 },
    { name: 'Keyboard', price: 200 },
    { name: 'Monitor', price: 300 }
  ];

  searchTerm = '';
  filteredProducts = [...this.products];
  private platformId = inject(PLATFORM_ID);
  // expose to template so we can hide icons during server-side rendering
  isBrowser = isPlatformBrowser(this.platformId);
  constructor(private router: Router) { }
  canExit(): boolean {
    return confirm('Are you sure you want to leave the dashboard?');
  }
  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('currentUser');
    }
    this.router.navigate(['/']);
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }


  toggleSearch() {
    this.showSearch = !this.showSearch;
  }


  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }




  ngOnInit() {
    if (this.isBrowser) {

      const storedUser = localStorage.getItem('currentUser');
      this.user = storedUser ? JSON.parse(storedUser) : null;
      return;
    }
    return;
  }

}
