import { Component,ContentChild,ElementRef } from '@angular/core';

@Component({
    selector:'cont-cont',
    template:`<ng-content></ng-content>
             <button (click)="changeData()">Checking the system</button>
             `
})


export class ContContComponent {

@ContentChild("hC") kala: ElementRef;
   
       changeData()
       {
           this.kala.nativeElement.textContent ="Continiuos Integration";
           console.log(this.kala);
       }     
}