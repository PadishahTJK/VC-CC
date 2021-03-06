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
var TestDirective = (function () {
    function TestDirective() {
        this.fS = "15px";
    }
    TestDirective.prototype.fc_onEnter = function () {
        this.fS = "35px";
    };
    TestDirective.prototype.fc_onLeave = function () {
        this.fS = "25px";
    };
    return TestDirective;
}());
__decorate([
    core_1.HostBinding('style.fontSize'),
    __metadata("design:type", Object)
], TestDirective.prototype, "fS", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDirective.prototype, "fc_onEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDirective.prototype, "fc_onLeave", null);
TestDirective = __decorate([
    core_1.Directive({
        selector: '[.testHighlight]'
    })
], TestDirective);
exports.TestDirective = TestDirective;
//# sourceMappingURL=test.directive.js.map