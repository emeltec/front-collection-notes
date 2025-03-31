import { Component } from '@angular/core';
import { HEADERS, PRODUCTS } from './constants-excel';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent {

  headers = HEADERS;
  products = PRODUCTS;

  constructor() { }

  exportExel() {
    const headers = HEADERS;
    const data = PRODUCTS.map(product => {
      return [product.id, product.name, product.description, product.brand, product.price, product.quantity];
    });

    /* generate worksheet and workbook */
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");

    XLSX.writeFile(workbook, "Productos.xlsx", { compression: true });
  }

}
