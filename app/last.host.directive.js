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
// Input
// Allows data to flow  from the binding Expression  into the directive
var LastHostDirective = (function () {
    function LastHostDirective(el) {
        this.el = el;
    }
    LastHostDirective.prototype.OnMouseEnter = function () {
        this.setLastColor("gray");
        console.log("GRAY Enter");
    };
    LastHostDirective.prototype.OnMouseLeave = function () {
        this.setLastColor("brown");
        console.log("Brown  Enter");
    };
    LastHostDirective.prototype.setLastColor = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return LastHostDirective;
}());
LastHostDirective = __decorate([
    core_1.Directive({
        selector: '[last-host]',
        host: {
            '(mouseenter)': 'OnMouseEnter()',
            '(mouseleave)': 'OnMouseLeave()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], LastHostDirective);
exports.LastHostDirective = LastHostDirective;
//# sourceMappingURL=last.host.directive.js.map