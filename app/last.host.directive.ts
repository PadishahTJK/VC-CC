import{ Directive,ElementRef,Renderer} from '@angular/core';

// Input
// Allows data to flow  from the binding Expression  into the directive
@Directive({
   selector:'[last-host]',
   host:{
       '(mouseenter)': 'OnMouseEnter()',
       '(mouseleave)': 'OnMouseLeave()'
   }   
})

export  class LastHostDirective{

constructor(private el: ElementRef){}
  
  OnMouseEnter(){
      this.setLastColor("gray");
      console.log("GRAY Enter");
  }
  OnMouseLeave(){
     this.setLastColor("brown");
     console.log("Brown  Enter");
  }

   setLastColor(color:string){
       this.el.nativeElement.style.backgroundColor=color;
   }

 
}