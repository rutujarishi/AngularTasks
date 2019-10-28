import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() public nameChanged: EventEmitter<string> = new EventEmitter<string>();
  name = '';
  constructor() { }

  ngOnInit() {
  }

  getUser() {
    this.nameChanged.emit(this.name);
  }

}
