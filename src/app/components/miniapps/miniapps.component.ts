import { Component, OnInit, Input } from '@angular/core';
import { MINIAPPS } from '../../mock-miniapps';
import { Miniapp } from '../../Miniapp';
@Component({
  selector: 'app-miniapps',
  templateUrl: './miniapps.component.html',
  styleUrls: ['./miniapps.component.css']
})
export class MiniappsComponent implements OnInit {

  miniapps: Miniapp[] = MINIAPPS

  constructor() { 
  }

  ngOnInit(): void {
  }

}
