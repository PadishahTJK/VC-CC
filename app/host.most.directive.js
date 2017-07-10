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
var HostMostDirective = (function () {
    function HostMostDirective() {
        this.c_color = "red";
    }
    HostMostDirective.prototype.c_onEnter = function () {
        this.c_color = "blue";
    };
    HostMostDirective.prototype.c_onLeave = function () {
        this.c_color = "yellow";
    };
    return HostMostDirective;
}());
__decorate([
    core_1.HostBinding('style.backgroundColor'),
    __metadata("design:type", Object)
], HostMostDirective.prototype, "c_color", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HostMostDirective.prototype, "c_onEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HostMostDirective.prototype, "c_onLeave", null);
HostMostDirective = __decorate([
    core_1.Directive({
        selector: '[.c_highlight]'
    })
], HostMostDirective);
exports.HostMostDirective = HostMostDirective;
//# sourceMappingURL=host.most.directive.js.map