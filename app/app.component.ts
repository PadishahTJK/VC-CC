// // Определение компонента app.component

// // импорт декоратора Component из модуля @angular/core
// import { Component } from '@angular/core';

// // Применение декоратора Component для класса AppComponent
// // Декоратор используется для присвоения метаданных для класса AppComponent
// @Component({
//   selector: 'my-app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
//   template: '<h1>My First Angular App</h1>' // HTML разметка определяющая представление текущего компонента
// })
// export class AppComponent {

//  } // Класс определяющий поведение компонента


import  {Component,ViewChild,ElementRef} from '@angular/core';
// import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {ViewChildComponent} from './view-child.component';
import { ChildComponent } from './child.component';
import {BoldDirective} from './bold.directive';


@Component({
   selector: 'my-app',
   template:`
     <p class="testHighlight"> Testing Area </p>
     <legend>
     <label>Enter Your Name:</label>
     <input [(ngModel)]="name"  placeholder="Your Name" >
     <h3>Welcome {{name}}</h3>
     </legend>
     <br />
     <viewC> </viewC> 
     <button (click)="incr()">+</button>
     <button (click)="decr()">-</button>
     <br />
     <br />
     <ch ></ch>
     <button (click)="change()">change</button>

     <p #nameParagraph >{{ism}}</p>
      <p>{{nameParagraph.textContent}}</p>
            <button (click)="alish()">IZMENIT</button>
    <br />
     <br />
 <contentCh >
 <h3 #headerContent  > Hush Omaded {{bahona}} !</h3>
 </contentCh>
         <br />
     <br />
     <cont-cont>
       <h6 #hC>Testing{{infa}}</h6>
     </cont-cont>
      <br />
     <br />
     <test-Comp>
     <p  #startComponent></p>
     
     </test-Comp>
   <br/>
     <br/>
      <div [ngClass]="{invisible:visible}">
        <h6> Information Center</h6>
        <p>Angular 2 Predstavlyaet modelnuyu Arhitekturnuyu  strukturu</p>
        <p [style.fontSize]=" '14px'" [style.fontFamily] =" 'Tahoma' "> stil </p>
      </div>
      <button (click)="toggle()"> Info</button>
      
      <br/> <br/>
      <div [style.fontSize]=" '18px' " 
           [style.fontFamily]="'Tahoma'" > Copyrights</div>
  
  <h4 [ngClass]="{pervoePravilo:true}">All rights reserved</h4>
  <p [ngClass]="{segoePrintFont:true}">For more Information..</p>
  <h6 [ngStyle]="{'fontSize':'10px','font-family':'Segoe Print'}">Testing Style</h6>

  <h6 [style.fontSize]=" '10px' " [style.fontFamily]=" 'Segoe Print' "> Alternative</h6>
          
           <p bold> Testing BoldDirective</p>

           <p class="c_highlight"> Some text</p>

           <br />
           <p italic>Foooter Text let say so ...</p>

           
             
            `,
            styles:[`.pervoePravilo{color:red;fontSize:15px;}
                     .invisible{display:none;}
                     .segoePrintFont{font-size:14px; font-family:"Segoe Print";}
                     `]
           
})

export class  AppComponent {



  visible:boolean =false;

toggle(){
  this.visible =!this.visible;
}

  infa:string="Information";

  bahona:string="Kor kun !";
    //nom:string ="Odam";

@ViewChild("nameParagraph")  nameParagraph: ElementRef;
    ism:string ="Angular2";

    alish(){
      console.log(this.nameParagraph.nativeElement.textContent);
      this.nameParagraph.nativeElement.textContent ="Hello"; 
    }

@ViewChild(ViewChildComponent)  private  counterComponent: ViewChildComponent;

incr() {
  this.counterComponent.incr();
}

decr() {
  this.counterComponent.decr();
}

@ViewChild(ChildComponent) private evCh: ChildComponent;

  change(){
    this.evCh.change();
  } 

}
