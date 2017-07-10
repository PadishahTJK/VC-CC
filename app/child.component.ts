import{ Component} from "@angular/core";

@Component({
     selector:'ch',
     template:`
               <div>
                 {{N}}
               </div>
     `
})

export class ChildComponent{

   N:string = "";
   
   change(){
     this.N ="OMAD"
   }

}// ChildComponent