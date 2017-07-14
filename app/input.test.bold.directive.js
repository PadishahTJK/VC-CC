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
var InputTestBoldDirective = (function () {
    //constructor
    function InputTestBoldDirective() {
        this.fontWeight = "normal";
        //Input ()
        this.selectedSize = "20px";
        this.defaultSize = "18px";
    }
    //ngOnInit()
    InputTestBoldDirective.prototype.ngOnInit = function () {
        this.fontSize = this.defaultSize;
    };
    Object.defineProperty(InputTestBoldDirective.prototype, "getFontSize", {
        // HostBinding
        get: function () {
            return this.fontSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTestBoldDirective.prototype, "getFontWeight", {
        get: function () {
            return this.fontWeight;
        },
        enumerable: true,
        configurable: true
    });
    //HostListener
    InputTestBoldDirective.prototype.OnmouseE = function () {
        this.fontSize = this.selectedSize;
        console.log("Bold mesha");
        this.fontWeight = "bold";
    };
    InputTestBoldDirective.prototype.OnMouseL = function () {
        this.fontSize = this.defaultSize;
        console.log("Normal  mesha");
        this.fontWeight = "normal";
    };
    return InputTestBoldDirective;
}()); //Export Class
__decorate([
    core_1.Input("test-bold"),
    __metadata("design:type", Object)
], InputTestBoldDirective.prototype, "selectedSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputTestBoldDirective.prototype, "defaultSize", void 0);
__decorate([
    core_1.HostBinding("style.fontSize"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], InputTestBoldDirective.prototype, "getFontSize", null);
__decorate([
    core_1.HostBinding("style.fontWeight"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], InputTestBoldDirective.prototype, "getFontWeight", null);
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputTestBoldDirective.prototype, "OnmouseE", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputTestBoldDirective.prototype, "OnMouseL", null);
InputTestBoldDirective = __decorate([
    core_1.Directive({
        selector: '[test-bold]'
    }),
    __metadata("design:paramtypes", [])
], InputTestBoldDirective);
exports.InputTestBoldDirective = InputTestBoldDirective;
//# sourceMappingURL=input.test.bold.directive.js.map