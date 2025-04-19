import { Component } from '@angular/core';
import { ExportPdfUtil } from './utils/export-pdf.util';
import { ExportPdfData } from './utils/export-pdf.data';
import { DetailsCard } from './utils/detail-card.interface';
import { DetailCardComponent } from './detail-card/detail-card.component';

@Component({
  selector: 'app-export-pdf',
  imports: [DetailCardComponent],
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.scss']
})
export class ExportPdfComponent {
  detailsCard: DetailsCard[] = [];

  ngOnInit() {
    this.detailsCard = ExportPdfData.getDetailsCard();
  }

  exportPDF(): void {
    ExportPdfUtil.generatePDF();
  }

}
