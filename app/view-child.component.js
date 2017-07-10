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
var ViewChildComponent = (function () {
    function ViewChildComponent() {
        this.nom = "Obama";
        this.counter = 0;
    }
    ViewChildComponent.prototype.changeName = function () {
        this.nom = "new big Boss";
        console.log("change Method");
    };
    ViewChildComponent.prototype.incr = function () {
        this.counter++;
    };
    ViewChildComponent.prototype.decr = function () {
        this.counter--;
    };
    return ViewChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ViewChildComponent.prototype, "nom", void 0);
ViewChildComponent = __decorate([
    core_1.Component({
        selector: 'viewC',
        template: "\n             <div>\n                <p> {{nom}} </p>\n                <p>  {{counter}} </p> \n                \n                         \n             </div>\n              "
    })
], ViewChildComponent);
exports.ViewChildComponent = ViewChildComponent;
//# sourceMappingURL=view-child.component.js.map