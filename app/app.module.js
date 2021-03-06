"use strict";
// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var view_child_component_1 = require("./view-child.component");
var child_component_1 = require("./child.component");
var content_child_component_1 = require("./content-child.component");
var cont_cont_component_1 = require("./cont.cont.component");
var test_component_1 = require("./test.component");
var bold_directive_1 = require("./bold.directive");
var host_most_directive_1 = require("./host.most.directive");
var test_directive_1 = require("./test.directive");
var host_directive_1 = require("./host.directive");
var highlight_directive_1 = require("./highlight.directive");
var update_highlight_1 = require("./update.highlight");
var test_highlight_1 = require("./test.highlight");
var last_host_directive_1 = require("./last.host.directive");
var input_bold_directive_1 = require("./input.bold.directive");
var input_test_bold_directive_1 = require("./input.test.bold.directive");
var input_host_directive_1 = require("./input.host.directive");
var if_component_1 = require("./if.component");
var for_component_1 = require("./for.component");
// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            view_child_component_1.ViewChildComponent,
            child_component_1.ChildComponent,
            content_child_component_1.ContentChildComponent,
            cont_cont_component_1.ContContComponent,
            test_component_1.TestComponent,
            bold_directive_1.BoldDirective,
            host_most_directive_1.HostMostDirective,
            test_directive_1.TestDirective,
            host_directive_1.HostDirective,
            highlight_directive_1.HighlightDirective,
            update_highlight_1.UpdateHighlight,
            test_highlight_1.TestHighlight,
            last_host_directive_1.LastHostDirective,
            input_bold_directive_1.InputBoldDirective,
            input_test_bold_directive_1.InputTestBoldDirective,
            input_host_directive_1.InputHostDirective,
            if_component_1.IfComponent,
            for_component_1.ForComponent
        ],
        bootstrap: [app_component_1.AppComponent] // компонент с которого начинается отображение приложения
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map