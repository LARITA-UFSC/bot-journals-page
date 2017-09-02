import { DocumentsService } from './documents.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdDatepickerModule,
  MdInputModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
} from '@angular/material';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ROUTING } from './documents.router';
import { DocumentsComponent } from './documents.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdProgressSpinnerModule,
    ReactiveFormsModule,
    ROUTING,
  ],
  declarations: [
    DocumentsComponent,
  ],
  providers: [
    DocumentsService,
  ],
})
export class DocumentsModule {
}
