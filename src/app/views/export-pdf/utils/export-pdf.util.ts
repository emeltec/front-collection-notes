// import * as pdfMake from "pdfmake/build/pdfmake";
// import "pdfmake/build/vfs_fonts";

import { createPdf } from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// (<any>pdfMake).addVirtualFileSystem(pdfFonts);


import { COLORS_MAP, getFormattedDate, LOGO_SVG, MARGIN_SECTION, BULLET_SVG } from "./constants-pdf";

export class ExportPdfUtil {
  
  static generatePDF() {
    const documentDefinition: any = {
      content: [
        {
          svg: LOGO_SVG,
        },
        // Título
        {
          text: 'Afiliación a Confirming – Pagadores (HUB)',
          style: 'HEADER_TITLE'
        },
        {
          text: getFormattedDate(),
          style: 'HEADER_DATE'
        },
        { text: '\n' }, // Espaciado

        // Sección Proceso de Afiliación
        {
          table: {
            widths: [15, '*'],
            headerRows: 1,
            body: [
              [{ svg: BULLET_SVG, }, { text: 'Proceso de afiliación', style: 'SECTION_TITLE', }]
            ]
          },
          layout: 'noBorders',
        },

        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [{ text: 'Tipo de operación', style: 'PROP_KEY' }, { text: 'Confirming – Pagadores (HUB)', style: 'PROP_VAL' }],
              [{ text: 'Fecha de afiliación', style: 'PROP_KEY' }, { text: '13 de junio del 2024 15:30 p.m.', style: 'PROP_VAL' }],
              [{ text: 'Estado', style: 'PROP_KEY' }, { columns: [{ svg: this.getStatus(), width: 7, margin: [0, 6, 0, 0] }, { text: 'Procesada', fontSize: 10, bold: true, color: COLORS_MAP.gray, margin: [5, 4, 0, 0] }] },],
              [{ text: '' }, { text: 'Las operaciones se podrán realizar a partir del siguiente día hábil', style: 'PROP_HELP' }]
            ]
          },
          layout: 'noBorders',
          margin: MARGIN_SECTION
        },

        // Sección Datos de la empresa
        {
          table: {
            widths: [15, '*'],
            headerRows: 1,
            body: [
              [{ svg: BULLET_SVG, }, { text: 'Datos de la empresa', style: 'SECTION_TITLE', }]
            ]
          },
          layout: 'noBorders',
        },
        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [{ text: 'Empresa', style: 'PROP_KEY' }, { text: 'Abratech Ingenieros S.A.C.', style: 'PROP_VAL' }],
              [{ text: 'RUC', style: 'PROP_KEY' }, { text: '20100245871', style: 'PROP_VAL' }],
              [{ text: 'TCL Contrato', style: 'PROP_KEY' }, { text: '001A10', style: 'PROP_VAL' }]
            ]
          },
          layout: 'noBorders',
          margin: MARGIN_SECTION
        },

        // Sección Datos de afiliación
        {
          table: {
            widths: [15, '*'],
            body: [
              [{ svg: BULLET_SVG, }, { text: 'Datos de afiliación', style: 'SECTION_TITLE', }]
            ]
          },
          layout: 'noBorders',
        },
        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [{ text: 'Metodología', style: 'PROP_KEY' }, { text: 'Descuento - Neteo', style: 'PROP_VAL' }],
              [{ text: 'Categoría', style: 'PROP_KEY' }, { text: 'Empresa A', style: 'PROP_VAL' }],
              [{ text: 'Abono documentos negativos', style: 'PROP_KEY' }, { text: 'Moneda equivalente', style: 'PROP_VAL' }],
              [{ text: 'Bloqueo de planilla', style: 'PROP_KEY' }, { text: 'Sí', style: 'PROP_VAL' }],
              [{ text: 'Beneficio', style: 'PROP_KEY' }, { text: 'Comisión de confirmación (%)', style: 'PROP_VAL' }],
              [{ text: 'Cuenta en soles', style: 'PROP_KEY' }, { text: '-', style: 'PROP_VAL' }],
              [{ text: 'Cuenta en dólares', style: 'PROP_KEY' }, { text: '191-0030271-1-67', style: 'PROP_VAL' }],
              [{ text: 'Plazo maximo de vencimiento', style: 'PROP_KEY' }, { text: '180 días', style: 'PROP_VAL' }],
              [{ text: 'Modo de asignación de línea', style: 'PROP_KEY' }, { text: 'Automática', style: 'PROP_VAL' }],
              [{ text: 'Correo de contacto', style: 'PROP_KEY' }, { text: 'company@mail.com', style: 'PROP_VAL' }],
              [{ text: 'Línea de crédito - Factoring', style: 'PROP_KEY' }, { text: '$ 90,426.00', style: 'PROP_BIG' }],
            ]
          },
          layout: 'noBorders',
          margin: MARGIN_SECTION
        },
      ],

      styles: {
        HEADER_TITLE: { fontSize: 13, bold: true, color: COLORS_MAP.blue, margin: [0, 30, 0, 0] },
        HEADER_DATE: { fontSize: 13, color: COLORS_MAP.gray, margin: [0, 5, 0, 15] },
        SECTION_TITLE: { fontSize: 12, bold: true, color: COLORS_MAP.blue, margin: [0, 0, 0, 0] },
        PROP_KEY: { fontSize: 10, bold: false, color: COLORS_MAP.gray, margin: [0, 4, 0, 0] },
        PROP_VAL: { fontSize: 10, bold: true, color: COLORS_MAP.gray, margin: [0, 4, 0, 0] },
        PROP_HELP: { fontSize: 9, color: COLORS_MAP.gray },
        PROP_BIG: { fontSize: 12, bold: true, color: COLORS_MAP.gray, margin: [0, 5, 0, 0] },
      }
    };

    createPdf(documentDefinition).open();
  }

  private static getStatus() {
    // return { canvas: [{ type: 'ellipse', x: 0, y: 0, r1: 5, r2: 5, color: '#6AC90F' }] };
    return `
        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.12728" cy="3.25448" r="3.01009" fill="#6AC90F"/>
        </svg `;
  }

}