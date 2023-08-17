import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Component_Communication';

  @Input()
  multiplication_result = 0;
  
  childname(event:any){
    this.multiplication_result = event;
    //this.child_lname=event.lname;
  }
}
