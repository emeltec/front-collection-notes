import { Routes } from '@angular/router';
import { EmptyComponent } from './shared/Empty/Empty.component';
import { ExportExcelComponent } from './views/export-excel/export-excel.component';
import { ExportPdfComponent } from './views/export-pdf/export-pdf.component';
import { InfiniteScrollComponent } from './views/infinite-scroll/infinite-scroll.component';

export const routes: Routes = [
  { path: '', redirectTo: 'excel', pathMatch: 'full' },
  { path: 'excel', component: ExportExcelComponent },
  { path: 'pdf', component: ExportPdfComponent },
  { path: 'infinite-scroll', component: InfiniteScrollComponent },
  // {path: '**', redirectTo: 'excel'}
  { path: '**', component: EmptyComponent }
];
