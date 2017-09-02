import { LOCALE_ID, NgModule } from '@angular/core';
import { MdButtonModule, MdMenuModule } from '@angular/material';

import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { InternalComponent } from './layout/internal/internal.component';
import { ROUTING } from 'app/app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleComponent } from './layout/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalComponent,
    SingleComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    HttpModule,
    MdButtonModule,
    MdMenuModule,
    ROUTING,
  ],
  providers: [
    ReactiveFormsModule,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
