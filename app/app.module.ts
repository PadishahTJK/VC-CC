// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import{ViewChildComponent } from './view-child.component';
import{ChildComponent } from './child.component';
import{ ContentChildComponent } from './content-child.component';
import{ContContComponent} from './cont.cont.component';
import{TestComponent} from './test.component';
import {BoldDirective} from './bold.directive';
import{HostMostDirective} from './host.most.directive';
import {TestDirective } from './test.directive';

import{HostDirective} from './host.directive';
import {HighlightDirective} from './highlight.directive';
import{UpdateHighlight} from './update.highlight';
import{TestHighlight} from './test.highlight';
import{LastHostDirective} from './last.host.directive';
import {InputBoldDirective} from './input.bold.directive';
import{InputTestBoldDirective} from './input.test.bold.directive';
import{InputHostDirective} from './input.host.directive';
import{IfComponent} from './if.component';

import{ForComponent} from './for.component';


// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,
                  ViewChildComponent,
                  ChildComponent,
                  ContentChildComponent,
                  ContContComponent,
                  TestComponent,
                  BoldDirective,
                  HostMostDirective,
                  TestDirective,
                  HostDirective,
                  HighlightDirective,
                  UpdateHighlight,
                  TestHighlight,
                  LastHostDirective,
                  InputBoldDirective,
                  InputTestBoldDirective,
                  InputHostDirective,
                  IfComponent,
                  ForComponent 
                ], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 
