import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  username: string = "";
  password: string = "";

  constructor
  (
    private authService: AuthService,
    private router: Router   
  ) { }

  ngOnInit(): void {
  }

  login()
  {
    console.log(this.username + " " + this.password);
    this.authService.validate(this.username, this.password)
                      .subscribe((user) =>
                      {
                        this.authService.setUserInfo(user);
                        this.router.navigate(["home"])
                      },
                      (error) =>
                      {
                        console.log("Error of Login");
                        console.log(error);
                      })
  };

  getUserInfo()
  {
    this.authService.getUserInfo()
                      .subscribe((user) =>
                      {
                        return this.user = user;
                      });
  };
}