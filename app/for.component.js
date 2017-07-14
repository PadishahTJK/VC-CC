"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ForComponent = (function () {
    function ForComponent() {
        this.items = ["Apple", "Huawei", "Samsung"];
        this.molho = [
            "Volvo",
            "BMW",
            "Audi"
        ];
        this.count = 5;
        this.hisob = 2;
    }
    return ForComponent;
}());
ForComponent = __decorate([
    core_1.Component({
        selector: 'forC',
        template: "\n               <ul>\n                <li *ngFor=\"let item of items\">{{item}}</li>\n               </ul>\n\n           <div>\n            <ul>\n            <ol *ngFor=\"let mol of molho \">{{mol}}</ol> \n            </ul>\n           </div>\n           <br />\n           <div [ngSwitch] =\"count\">\n            <template [ngSwitchCase]=\"1\">{{count*10}}</template>\n            <template [ngSwitchCase]=\"2\" >{{count*100 }}</template>\n            <template ngSwitchDefault>{{count*1000}}</template>\n           </div>\n            <br /><br />\n            <div [ngSwitch]=\"hisob\">\n              <template [ngSwitchCase]=\"1\">{{hisob*2}}</template>\n              <template [ngSwitchCase]=\"2\">{{hisob*4}}</template>\n              <template ngSwitchDefault>{{hisob*6}}</template>\n            </div>\n     \n\n              "
    })
], ForComponent);
exports.ForComponent = ForComponent;
//# sourceMappingURL=for.component.js.map