import {Component,Directive,HostListener,HostBinding} from '@angular/core';

@Component({
  selector:'[.c_highlight]'
})

export class HostMostComponent{
   @HostBinding('style.backgroundColor') c_color ="red";

   @HostListener('mouseenter') c_onEnter(){
       this.c_color="blue";
   }

   @HostListener('mouseleave') c_onLeave(){
       this.c_color="yellow";
   }


}