import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  todos = [
    {name: "1", checked: true},
  ];
  username = '';
  password = '';


  constructor(private loginService: LoginService) { 
    
  }

  ngOnInit() {
    
  }

  login() {
    this.loginService.Login({username: this.username, password: this.password}).subscribe((res) => {
      var user: any = {};
      user = res;
      if(user) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', user.username);
        window.location.assign("http://localhost:4200/list");
      }
    }, error => {
      alert('Kullanıcı Adı veya Şifre Hatalı');
    })
  }

  inputControl(e: any) {
    if(e.target.name == "username") {
      this.username = e.target.value;
    }
    if(e.target.name == "password") {
      this.password = e.target.value;
    }
  }

}
