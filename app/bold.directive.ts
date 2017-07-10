import {Component,ElementRef,Renderer} from "@angular/core";

@Component({
    selector:'bol',
    template:''
})

export class BoldDirective{
    //  constructor(private  elementRef: ElementRef){

    //      this.elementRef.nativeElement.style.fontWeight ="bold";
    //  }//Constructor
constructor(private elementRef: ElementRef, private renderer: Renderer){
         
this.renderer.setElementAttribute(this.elementRef.nativeElement, "font-weight", "bold");
    }
}// Bold Directive


