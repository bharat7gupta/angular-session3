import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  theShortGuy = "Tyrion Lannister";
  theTallGuy = "Gregor Clegane";
  theHonourableGuy = "ned stark";

  today = new Date();

  cardNumber = "5327020223014518";

  constructor() { }

  ngOnInit() {
  }

}
