import { Injector, NgModule, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackFormComponent } from './feedback-form.component';
import { interval } from 'rxjs';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [FeedbackFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  entryComponents: [FeedbackFormComponent]
})
export class AppModule {
  constructor(injector: Injector, appRef: ApplicationRef) {
    const el = createCustomElement(FeedbackFormComponent, {
      injector: injector
    });
    customElements.define('feedback-form', el);

    // workaround for now
    interval(50).subscribe(() => appRef.tick());
  }

  ngDoBootstrap() {}
}
