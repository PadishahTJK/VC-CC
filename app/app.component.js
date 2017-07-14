"use strict";
// // Определение компонента app.component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// // импорт декоратора Component из модуля @angular/core
// import { Component } from '@angular/core';
// // Применение декоратора Component для класса AppComponent
// // Декоратор используется для присвоения метаданных для класса AppComponent
// @Component({
//   selector: 'my-app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
//   template: '<h1>My First Angular App</h1>' // HTML разметка определяющая представление текущего компонента
// })
// export class AppComponent {
//  } // Класс определяющий поведение компонента
var core_1 = require("@angular/core");
var view_child_component_1 = require("./view-child.component");
var child_component_1 = require("./child.component");
var AppComponent = (function () {
    function AppComponent() {
        this.visible = false;
        this.infa = "Information";
        this.bahona = "Kor kun !";
        this.ism = "Angular2";
    }
    AppComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    AppComponent.prototype.alish = function () {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "Hello";
    };
    AppComponent.prototype.incr = function () {
        this.counterComponent.incr();
    };
    AppComponent.prototype.decr = function () {
        this.counterComponent.decr();
    };
    AppComponent.prototype.change = function () {
        this.evCh.change();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("nameParagraph"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "nameParagraph", void 0);
__decorate([
    core_1.ViewChild(view_child_component_1.ViewChildComponent),
    __metadata("design:type", view_child_component_1.ViewChildComponent)
], AppComponent.prototype, "counterComponent", void 0);
__decorate([
    core_1.ViewChild(child_component_1.ChildComponent),
    __metadata("design:type", child_component_1.ChildComponent)
], AppComponent.prototype, "evCh", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    \t\n\n   <br/><br />\n     <br />\n     <p class=\"testHighlight\"> Testing Area </p>\n     <legend>\n     <label>Enter Your Name:</label>\n     <input [(ngModel)]=\"name\"  placeholder=\"Your Name\" >\n     <h3>Welcome {{name}}</h3>\n     </legend>\n     <br />\n     <viewC> </viewC> \n     <button (click)=\"incr()\">+</button>\n     <button (click)=\"decr()\">-</button>\n     <br />\n     <br />\n     <ch ></ch>\n     <button (click)=\"change()\">change</button>\n\n     <p #nameParagraph >{{ism}}</p>\n      <p>{{nameParagraph.textContent}}</p>\n            <button (click)=\"alish()\">IZMENIT</button>\n    <br />\n     <br />\n <contentCh >\n <h3 #headerContent  > Hush Omaded {{bahona}} !</h3>\n </contentCh>\n         <br />\n     <br />\n     <cont-cont>\n       <h6 #hC>Testing{{infa}}</h6>\n     </cont-cont>\n      <br />\n     <br />\n     <test-Comp>\n     <p  #startComponent></p>\n     \n     </test-Comp>\n   <br/>\n     <br/>\n      <div [ngClass]=\"{invisible:visible}\">\n        <h6> Information Center</h6>\n        <p>Angular 2 Predstavlyaet modelnuyu Arhitekturnuyu  strukturu</p>\n        <p [style.fontSize]=\" '14px'\" [style.fontFamily] =\" 'Tahoma' \"> stil </p>\n      </div>\n      <button (click)=\"toggle()\"> Info</button>\n      \n      <br/> <br/>\n      <div [style.fontSize]=\" '18px' \" \n           [style.fontFamily]=\"'Tahoma'\" > Copyrights</div>\n  \n  <h4 [ngClass]=\"{pervoePravilo:true}\">All rights reserved</h4>\n  <p [ngClass]=\"{segoePrintFont:true}\">For more Information..</p>\n  <h6 [ngStyle]=\"{'fontSize':'10px','font-family':'Segoe Print'}\">Testing Style</h6>\n  <h6 [style.fontSize]=\" '10px' \" [style.fontFamily]=\" 'Segoe Print' \"> Alternative</h6>\n          \n    <p bold> Testing BoldDirective</p>\n    <p class=\"c_highlight\"> Some text</p>\n    <br />\n    <p italic>Foooter Text let say so ...</p>\n<br /><br />\n  <p my-highlight>Testing my HighLight </p>\n  <br />\n  <div upd-highL>Updated  Version  of Highlight</div>\n  <br />\n  <div test-h>Testing  Highlight</div>\n    <br />\n<div>\nRendering in Angular 2 means  how the framework decides to draw/print/display the application\n</div>\n<p> almost 100 % time this means  that the application  wiil be rendered in the DOM </p>   \n    <br/>\n    <p last-host>Input allows  data  to flow  from Binding  expression into Directive </p>\n<br />\n<p input-bold  >Hello Angular 2</p> \n      <br /><br/><br /><br/><br /><br/><br /><br/>\n    <div [test-bold]=\" '35px' \" [defaultSize]=\"'14px'\">Poluchenie Parametrov v Direktivah</div>\n      <br /><br/>   \n      <p in-hs>Here is Host</p>  \n\n      <br />\n      <ifC></ifC> \n      <br /><br />\n      <forC></forC>\n            ",
        styles: [".pervoePravilo{color:red;fontSize:15px;}\n                     .invisible{display:none;}\n                     .segoePrintFont{font-size:14px; font-family:\"Segoe Print\";}\n                     "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map