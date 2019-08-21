import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class GhostComponent implements OnInit {

  monstername:string = 'Casper'
  
  constructor() { }

  ngOnInit() {
  }

}
