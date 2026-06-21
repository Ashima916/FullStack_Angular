import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

   constructor(private router: Router) {}

  // Returns true if the user is currently on the root default path
  isLoginPage(): boolean {
    return this.router.url === '/' || this.router.url === '/login';
  }
}
