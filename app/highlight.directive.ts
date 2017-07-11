import {Directive,HostListener,Input,ElementRef} from '@angular/core';

@Directive({
    selector:'[my-highlight]'
})

export class HighlightDirective{

    constructor(private el:ElementRef){

    }//Constructor

    @HostListener('mouseenter') onMouseEnter(){
       this.my_highlight('yellow');
       
    }

    @HostListener('mouseleave') onMouseLeave(){
       this.my_highlight(null);    
    }

    private my_highlight (color:string){
         this.el.nativeElement.style.backgroundColor = color;
    }

}//Class