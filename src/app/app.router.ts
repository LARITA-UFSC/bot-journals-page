import { RouterModule, Routes } from '@angular/router';

import { InternalComponent } from 'app/layout/internal/internal.component';
import { ModuleWithProviders } from '@angular/core';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'documents', pathMatch: 'full' },

  {
    path: '',
    canActivateChild: [],
    component: InternalComponent,
    children: [
      { path: 'documents', loadChildren: 'app/documents/documents.module#DocumentsModule' },
    ],
  },
  
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
