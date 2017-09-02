import { DocumentsService } from './documents.service';
import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {

  emptySearch = true;
  loading = false;
  
  documents: any[];

  filterForm: FormGroup = new FormGroup({
    'term': new FormControl(''),
  });

  constructor(private service: DocumentsService) { }

  async onFilter() {
    if (this.filterForm.valid) {
      try {
        this.documents = [];

        this.emptySearch = false;
        this.loading = true;
        this.documents = await this.service.search(this.filterForm.value.term);

      } finally {
        this.loading = false;
      }

      return;
    }

  }

} /* istanbul ignore next */
