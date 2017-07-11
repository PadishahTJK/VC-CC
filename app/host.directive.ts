import{ Directive,ElementRef,Renderer} from '@angular/core';

@Directive({
    selector:'[italic]',
    host:{
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()'
    }//Host
})

export class HostDirective{
   
constructor(private element:ElementRef,private renderer:Renderer){
     this.renderer.setElementStyle(this.element.nativeElement,"cursor","pointer");
  }//Constructor

   onMouseEnter(){
       this.setFontStyle("italic");
   }
   onMouseLeave(){
       this.setFontStyle("normal");
   }

   private setFontStyle(val){
        this.renderer.setElementStyle(this.element.nativeElement,"font-style",val);
   }


}//export