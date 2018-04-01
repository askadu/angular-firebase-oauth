import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private displayName: string;
  private photoURL: string;
  private email: string;

  constructor(private authService: AuthService, private router: Router) {
    this.displayName = localStorage.getItem('displayName');
    this.photoURL = localStorage.getItem('photoURL');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}