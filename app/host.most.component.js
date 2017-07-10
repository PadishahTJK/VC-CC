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
var HostMostComponent = (function () {
    function HostMostComponent() {
        this.c_color = "red";
    }
    HostMostComponent.prototype.c_onEnter = function () {
        this.c_color = "blue";
    };
    HostMostComponent.prototype.c_onLeave = function () {
        this.c_color = "yellow";
    };
    return HostMostComponent;
}());
__decorate([
    core_1.HostBinding('style.backgroundColor'),
    __metadata("design:type", Object)
], HostMostComponent.prototype, "c_color", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HostMostComponent.prototype, "c_onEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HostMostComponent.prototype, "c_onLeave", null);
HostMostComponent = __decorate([
    core_1.Component({
        selector: '[.c_highlight]'
    })
], HostMostComponent);
exports.HostMostComponent = HostMostComponent;
//# sourceMappingURL=host.most.component.js.map