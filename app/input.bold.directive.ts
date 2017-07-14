import {Directive,ElementRef,Input,HostListener,HostBinding,OnInit} from '@angular/core';

@Directive({
  selector:'[input-bold]'
})

export class InputBoldDirective implements OnInit{
    
    @Input() selectedSize ="18px";
    @Input() defaultSize ="16px";

    private fontSize:string;
    private fontWeight ="normal"

    ngOnInit(): void {
  
    if(this.fontSize){
        this.fontSize = this.defaultSize;
    }
     else{
     }
}//OnInit
 
    constructor(){}

@HostBinding("style.fontSize") get getFontSize(){
    return this.fontSize;
   
}    

@HostBinding("style.fontWeight") get getFontWeight(){
  
    return this.fontWeight; //NORMAL

}

@HostListener("mouseenter") OnMouseEnter(){
    this.fontWeight = "bold";
    this.fontSize =this.selectedSize; 
}

@HostListener("mouseleave") OnMouseLeave(){
   this.fontWeight = "normal";
   this.fontSize = this.defaultSize;
}



}//export class