import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private messages = [];

  constructor(private authHttp: AuthHttp, private http: Http) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.get('http://localhost:3000/messages', { headers: headers }).subscribe(response => {
      this.messages = response.json();
    });
  }

}
