import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  num1:number=0;
  num2:number=0;
  multiplication = 0;

  @Output()
  emitter = new EventEmitter();

  multiply(){
    this.multiplication = this.num2 * this.num1;
    this.emitter.emit(this.multiplication);
  }
}
