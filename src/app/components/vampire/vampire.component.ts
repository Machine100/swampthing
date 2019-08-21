import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vampire',
  templateUrl: './vampire.component.html',
  styleUrls: ['./vampire.component.css']
})
export class VampireComponent implements OnInit {

  monstername:string = 'Dracula'
  
  constructor() { }

  ngOnInit() {
  }

}
