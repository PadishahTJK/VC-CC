import {Component} from '@angular/core';

@Component({
    selector:'forC',
    template:`
               <ul>
                <li *ngFor="let item of items">{{item}}</li>
               </ul>

           <div>
            <ul>
            <ol *ngFor="let mol of molho ">{{mol}}</ol> 
            </ul>
           </div>
           <br />
           <div [ngSwitch] ="count">
            <template [ngSwitchCase]="1">{{count*10}}</template>
            <template [ngSwitchCase]="2" >{{count*100 }}</template>
            <template ngSwitchDefault>{{count*1000}}</template>
           </div>
            <br /><br />
            <div [ngSwitch]="hisob">
              <template [ngSwitchCase]="1">{{hisob*2}}</template>
              <template [ngSwitchCase]="2">{{hisob*4}}</template>
              <template ngSwitchDefault>{{hisob*6}}</template>
            </div>
     

              `
})

export class ForComponent{

  items=["Apple","Huawei","Samsung"];
 
molho=[
    "Volvo",
    "BMW",
    "Audi"
];

count: number =5;

hisob: number=2;

}