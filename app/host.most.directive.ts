import {Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector:'[.c_highlight]'
})

export class HostMostDirective{
   @HostBinding('style.backgroundColor') c_color ="red";

   @HostListener('mouseenter') c_onEnter(){
       this.c_color="blue";
   }

   @HostListener('mouseleave') c_onLeave(){
       this.c_color="yellow";
   }


}