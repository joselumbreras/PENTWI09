import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from './../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  model = {
    username: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.model.username, this.model.password)
      .subscribe(success => {
        if (success) {
          this.router.navigateByUrl("");
          console.log('Login successful');
        } else {
          console.log('Login failed');
        }
      });
  }

}
