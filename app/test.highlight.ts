import {Directive,ElementRef,Input} from '@angular/core';

 @Directive({
      selector:'[test-h]',
      host:{
          '(mouseenter)':'OnMouseEnter()',
          '(mouseleave)':'OnMouseLeave()'
      }
 })

export class TestHighlight{

constructor(private el:ElementRef){}
    OnMouseEnter(){
    console.log("Test");
       this.setEv('red');
    }
    OnMouseLeave(){
        this.setEv('blue');
       
          console.log("LeaveTest");
    }
  private setEv(val:string){
      this.el.nativeElement.style.backgroundColor=val;
  }//setEv()
}

