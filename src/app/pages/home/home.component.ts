import { Component, OnInit } from '@angular/core';
import { TofservicesService } from 'src/app/services/tofservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:any[]=[];
  constructor(private services : TofservicesService){

  }
  ngOnInit(): void {
    this.list=this.services.mostrarhome();
  }
  
}
