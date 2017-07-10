import {Component,ContentChild,ElementRef} from '@angular/core';

@Component({
    selector:'contentCh',
    template:`
              <ng-content></ng-content>
              <button (click)="changeName()">Alish kun </button>
             `
})

export class ContentChildComponent {

 @ContentChild("headerContent")  header: ElementRef;

 changeName():void{
     console.log(this.header);
     this.header.nativeElement.textContent =" Let see ContentChild";
     console.log(this.header.nativeElement);
 }

}