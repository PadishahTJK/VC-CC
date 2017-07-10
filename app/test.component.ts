import {Component,ContentChild,ElementRef} from '@angular/core'

@Component({
    selector:'test-Comp',
    template:`
              <ng-content></ng-content>
              <button (click)="start()">Start</button> 
             `

})


export class TestComponent{

    @ContentChild('startComponent')  st: ElementRef;

   start():void{
    this.st.nativeElement.textContent ="Finish";
   }

}