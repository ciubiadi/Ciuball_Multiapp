import { Component, Input, OnInit } from '@angular/core';
import { Miniapp } from 'src/app/Miniapp';



@Component({
  selector: 'app-miniapp',
  templateUrl: './miniapp.component.html',
  styleUrls: ['./miniapp.component.css']
})
export class MiniappComponent implements OnInit {

  @Input() miniapp: Miniapp 
  constructor() {
    this.miniapp = MiniappComponent;
   }

  ngOnInit(): void {
  }

}
