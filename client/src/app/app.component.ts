import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  title = 'PENTWI09';

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    console.log('Logging out');
    this.userService.logout();
    this.router.navigate([''])
  }

}
