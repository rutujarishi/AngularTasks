import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Output() public childEvent= new EventEmitter();
  name: string;

  constructor() { }

  ngOnInit() {
  }

  getUser() {
    this.childEvent.emit(this.name);
  }
}
