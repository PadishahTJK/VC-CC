// import {Directive,ElementRef,Renderer} from "@angular/core";

// @Directive({
//     selector:'[bol]',
    
// })

// export class BoldDirective{
//     //  constructor(private  elementRef: ElementRef){

//     //      this.elementRef.nativeElement.style.fontWeight ="bold";
//     //  }//Constructor
// constructor(private elementRef: ElementRef, private renderer: Renderer){
         
// this.renderer.setElementAttribute(this.elementRef.nativeElement, "font-weight", "bold");
//     }
// }// Bold Directive


import {Directive, ElementRef} from '@angular/core';
 
@Directive({
    selector: '[bold]'
})
export class BoldDirective{
     
    constructor(private elementRef: ElementRef){
         
        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
}