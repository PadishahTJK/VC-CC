import{Component} from '@angular/core';

@Component({
    selector:'ifC',
    template:`
           <p *ngIf="condition">Salam Mir</p>
           <p *ngIf="!condition"> Hayr Sulh</p>
           <button (click)="toggle()">Toggle</button>
    `
})

export class IfComponent {
     condition:boolean =true;

     toggle(){
         this.condition=!this.condition;
     }
}