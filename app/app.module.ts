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
                  BoldDirective 
                ], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 
