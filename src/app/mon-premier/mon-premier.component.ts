import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.css']
})
export class MonPremierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  onClick() {
    const href="gestionCompteAdmin";
    alert('test');
  } 
  

}
