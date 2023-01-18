import { Component, OnInit } from '@angular/core';
import { TofservicesService } from 'src/app/services/tofservices.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  list:any[]=[];
  constructor(private services : TofservicesService){

  }
  ngOnInit(): void {
    this.list=this.services.mostrarweapons();
  }
  
}
