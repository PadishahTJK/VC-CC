import {Component,Input} from "@angular/core";

@Component({
    selector:'viewC',
    template:`
             <div>
                <p> {{nom}} </p>
                <p>  {{counter}} </p> 
                
                         
             </div>
              `
}) 


export class ViewChildComponent{
   
 @Input() nom:string ="Obama";
   
   counter:number = 0;

changeName(){
  this.nom="new big Boss";
  console.log("change Method");
}


   incr() {
     this.counter++;
   }

   decr(){
      this.counter--;
   }

}