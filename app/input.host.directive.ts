import {Directive,ElementRef,Renderer,Input,OnInit} from "@angular/core";

@Directive({
    selector:'in-hs',
    host:{
        '(mouseenter)': 'MouseE()',
        '(mouseleave)': 'MouseL()'
    }
})

export class InputHostDirective {
    private fontS: string;
    //Assigning the value
    private fontW = "normal";

    @Input() selectedSize ="30px";
    @Input() defaultSize ="20px";

   ngOnInit(){
       this.fontS = this.defaultSize;
   }
   constructor(private el :ElementRef){}

    MouseE(){
      this.setNew("bold","35px");
    //   this.fontS =this.selectedSize;
      console.log("Host Bold");
    //   this.fontW ="bold";
    }
    MouseL(){
        this.fontS = this.defaultSize;
        console.log(" Host Normal ");
        this.fontW = "normal";
    }

    private setNew(fontS,fontW){
      this.el.nativeElement.style.fontSize =fontS;
      this.el.nativeElement.style.fontWeight= fontW;
        
    }



}