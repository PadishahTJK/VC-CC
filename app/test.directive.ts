import{ Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector:'[.testHighlight]'
})

export class TestDirective{
   
   @HostBinding ('style.fontSize') fS="15px";

   @HostListener('mouseenter') fc_onEnter(){
       this.fS ="35px";
   }
   @HostListener('mouseleave') fc_onLeave(){
       this.fS ="25px";
   }
}