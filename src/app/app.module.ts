import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter.component';
import {createCustomElement} from "@angular/elements";
import { TestComponent } from './components/test/test.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector:Injector){

  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ng-app', el);
  }
}
