import{Directive,HostListener,HostBinding,Input,ElementRef,OnInit} from '@angular/core';

@Directive({
   selector:'[test-bold]'
})

export class InputTestBoldDirective implements OnInit{
  //PRIVATE
  private fontSize : string;
  private fontWeight ="normal";

  //Input ()
@Input("test-bold") selectedSize ="20px";
@Input() defaultSize="18px";

//ngOnInit()
ngOnInit():void {
   this.fontSize =this.defaultSize;
}
  //constructor
  constructor(){}

  // HostBinding
  @HostBinding("style.fontSize") get getFontSize(){
      return this.fontSize;
  }

  @HostBinding("style.fontWeight") get getFontWeight(){
     return this.fontWeight;
  }

  //HostListener
  @HostListener("mouseenter") OnmouseE(){
      this.fontSize = this.selectedSize;
      console.log("Bold mesha");
      this.fontWeight= "bold";
  }

  @HostListener("mouseleave") OnMouseL(){
     this.fontSize = this.defaultSize;
     console.log("Normal  mesha");
     this.fontWeight ="normal";
  }

}//Export Class
