import { Component } from '@angular/core';
import { UserServicesApiService } from 'src/app/services/user-services-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  usuarios: any[] = [];
  
  constructor( private servapi: UserServicesApiService ){}
  ngOnInit(): void {

  }

  mostrarUsers():void{
    this.servapi.getAllUsers().subscribe( data  => this.usuarios = data);
  }
}
