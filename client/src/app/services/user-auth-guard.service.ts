import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './../services/user.service';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate() {
        if (this.userService.isLoggedIn()) {
            console.log('Navigation allowed');
            return true;
        } else {
            console.log('Navidation denied');
            this.router.navigate(['']);
            return false;
        }
    }

}