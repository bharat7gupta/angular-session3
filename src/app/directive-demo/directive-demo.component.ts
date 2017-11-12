import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  choiceOfLife: string = 'peace';
  peaceLovers = ['Batman', 'Shaktimaan', 'We'];
  chaosLovers = ['Joker', 'Dr. Jaikal', 'We'];
  choiceStyles = {
    color: 'green'
  }

  constructor() { }

  ngOnInit() {
  }

  setChoice(choiceOfLife) {
    this.choiceOfLife=choiceOfLife;
    this.choiceStyles.color = this.choiceOfLife === 'peace' ? 'green' : 'red';
  }

}
