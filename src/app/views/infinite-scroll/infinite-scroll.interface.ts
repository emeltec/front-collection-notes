export interface IProductResponse {
  metadata: IMetadata;
  products: IProduct[];
}

export interface IProduct {
  barcode: string;
  brand_id: number;
  description: string;
  id: number;
  measure_unit_id: number;
  product_code: string;
  purchase_price: number;
  quantity: number;
  sale_price: number;
  unit_price: number;
}

export interface IMetadata {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

export interface IProductProcess extends IProduct {
  cantidad: number;
  subtotal?:string;
  total?:string;
}

export const MSG_AUTOCOMPLETE_SELECT = {
  DEFAULT: 'Busca un producto por código o nombre',
  NO_STOCK: 'No cuenta con stock el producto que intentas seleccionar',
  NO_RESULTS: 'No se encontraron resultados',
  REQUIRED: 'Este campo es obligatorio'
}