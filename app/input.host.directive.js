"use strict";
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
var core_1 = require("@angular/core");
var InputHostDirective = (function () {
    function InputHostDirective(el) {
        this.el = el;
        //Assigning the value
        this.fontW = "normal";
        this.selectedSize = "30px";
        this.defaultSize = "20px";
    }
    InputHostDirective.prototype.ngOnInit = function () {
        this.fontS = this.defaultSize;
    };
    InputHostDirective.prototype.MouseE = function () {
        this.setNew("bold", "35px");
        //   this.fontS =this.selectedSize;
        console.log("Host Bold");
        //   this.fontW ="bold";
    };
    InputHostDirective.prototype.MouseL = function () {
        this.fontS = this.defaultSize;
        console.log(" Host Normal ");
        this.fontW = "normal";
    };
    InputHostDirective.prototype.setNew = function (fontS, fontW) {
        this.el.nativeElement.style.fontSize = fontS;
        this.el.nativeElement.style.fontWeight = fontW;
    };
    return InputHostDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputHostDirective.prototype, "selectedSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputHostDirective.prototype, "defaultSize", void 0);
InputHostDirective = __decorate([
    core_1.Directive({
        selector: 'in-hs',
        host: {
            '(mouseenter)': 'MouseE()',
            '(mouseleave)': 'MouseL()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], InputHostDirective);
exports.InputHostDirective = InputHostDirective;
//# sourceMappingURL=input.host.directive.js.map