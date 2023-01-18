import { Component, OnInit } from '@angular/core';
import { TofservicesService } from 'src/app/services/tofservices.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  list:any[]=[];
  constructor(private services : TofservicesService){

  }
  ngOnInit(): void {
    this.list=this.services.mostrarcharacters();
  }
  
}
