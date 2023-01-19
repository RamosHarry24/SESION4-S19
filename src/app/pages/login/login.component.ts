import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServicesApiService } from 'src/app/services/user-services-api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm = new FormGroup({
username: new FormControl(''),
password: new FormControl(''),
})

constructor(private session: UserServicesApiService){}

onSubmit(){
this.session.login(this.loginForm);
sessionStorage.setItem('Token', '123456789');
}

}

