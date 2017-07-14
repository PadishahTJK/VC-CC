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
var InputBoldDirective = (function () {
    function InputBoldDirective() {
        this.selectedSize = "18px";
        this.defaultSize = "16px";
        this.fontWeight = "normal";
    }
    InputBoldDirective.prototype.ngOnInit = function () {
        if (this.fontSize) {
            this.fontSize = this.defaultSize;
        }
        else {
        }
    }; //OnInit
    Object.defineProperty(InputBoldDirective.prototype, "getFontSize", {
        get: function () {
            return this.fontSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputBoldDirective.prototype, "getFontWeight", {
        get: function () {
            return this.fontWeight; //NORMAL
        },
        enumerable: true,
        configurable: true
    });
    InputBoldDirective.prototype.OnMouseEnter = function () {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    };
    InputBoldDirective.prototype.OnMouseLeave = function () {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    };
    return InputBoldDirective;
}()); //export class
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputBoldDirective.prototype, "selectedSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputBoldDirective.prototype, "defaultSize", void 0);
__decorate([
    core_1.HostBinding("style.fontSize"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], InputBoldDirective.prototype, "getFontSize", null);
__decorate([
    core_1.HostBinding("style.fontWeight"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], InputBoldDirective.prototype, "getFontWeight", null);
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputBoldDirective.prototype, "OnMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputBoldDirective.prototype, "OnMouseLeave", null);
InputBoldDirective = __decorate([
    core_1.Directive({
        selector: '[input-bold]'
    }),
    __metadata("design:paramtypes", [])
], InputBoldDirective);
exports.InputBoldDirective = InputBoldDirective;
//# sourceMappingURL=input.bold.directive.js.map