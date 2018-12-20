import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextModuleComponent } from './text-module/text-module.component';

import { FetchColorService } from './fetch-color.service';


@NgModule({
  declarations: [
    TextModuleComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FetchColorService],
  bootstrap: [],
  entryComponents: [TextModuleComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(TextModuleComponent, { injector });
    customElements.define('text-module', customElement);
  }
  ngDoBootstrap() {
  }
 }
