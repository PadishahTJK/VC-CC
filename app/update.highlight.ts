import{Directive,Input,ElementRef } from '@angular/core';

@Directive({
    selector:'[upd-highL]',
    host:{
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()'
    }
})


export class UpdateHighlight{
 
 //Constructor

 constructor( private el:ElementRef){

 }
   onMouseEnter(){
       this.setUpdateHighLight('cyan');
       console.log("Mouse Enter");

   }
   onMouseLeave(){
     this.setUpdateHighLight('purple');
     console.log(" Mouse Leave");
   }


   private setUpdateHighLight(color:string){
       this.el.nativeElement.style.backgroundColor=color;
   }

    


}