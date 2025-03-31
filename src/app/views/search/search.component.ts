import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollService } from '../infinite-scroll/infinite-scroll.service';
import { IMetadata, IProduct, IProductProcess, IProductResponse, MSG_AUTOCOMPLETE_SELECT } from '../infinite-scroll/infinite-scroll.interface';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class InfiniteScrollComponent {

  @ViewChild('searchInput') searchInput!: ElementRef;

  queryTerm: string = '';
  currentPage: number = 1;
  limitPage: number = 10;

  metaData: IMetadata = {} as IMetadata;
  collections: IProduct[] = [];

  collectionTemp: IProductProcess[] = [];
  public totalGlobal: string = '0.00';
  public totalSinIGV: string = '0.00';
  public totalTax: string = '0.00';

  isLoading: boolean = false;
  stateSearch: string = '';
  messageSearch: string = MSG_AUTOCOMPLETE_SELECT.DEFAULT;

  constructor(private apiService: InfiniteScrollService) { }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((event: any) => {
        const newValue = (event.target as HTMLInputElement).value.trim();
        if (newValue !== this.queryTerm) {
          this.queryTerm = newValue;
          this.currentPage = 1;
          this.collections = [];
          this.loadData();
        }
      });
  }

  loadData(): void {
    if (this.queryTerm.trim() === '' || this.queryTerm.length < 2) {
      this.collections = [];
      return;
    }

    this.isLoading = true;

    this.apiService
      .searchProducts(this.queryTerm, this.currentPage, this.limitPage)
      .subscribe({
        next: (data: IProductResponse) => {
          this.metaData = data.metadata;
          this.collections = [...this.collections, ...data.products];
          this.currentPage++;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error en la API:', error);
          this.isLoading = false;
        },
      });
  }

  selectItem(data: IProduct) {
    if(data.quantity > 0) {
      this.collectionTemp.push(this.addToCollection(data));
      this.messageSearch = MSG_AUTOCOMPLETE_SELECT.DEFAULT;
      this.stateSearch = '';
      this.calcTotalGlobal();
    } else {
      this.messageSearch = MSG_AUTOCOMPLETE_SELECT.NO_STOCK;
      this.stateSearch = 'error';
    }
  }

  addToCollection(data: IProduct) {
    let product: IProductProcess = { ...data, cantidad: 1 };
    product.subtotal = ((Number(product.sale_price) * product.cantidad) / 1.18).toFixed(2);
    product.total = (Number(product.sale_price) * product.cantidad).toFixed(2);
    return product;
  }

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;

    const needScroll = scrollHeight - clientHeight;
    if (scrollTop > needScroll - 20 && this.currentPage <= this.metaData.totalPages && !this.isLoading) {
      console.log('Cargando más datos...');
      this.loadData();
    }
  }

  onFocus(){
    document.querySelector('#wrapper')?.classList.add('show');
  }

  onBlur(){
    setTimeout(() => {
      document.querySelector('#wrapper')?.classList.remove('show');
    }, 200);
  }

  quantityChange(val: any, product: IProductProcess, idx: number) {
    product.cantidad = Number(val.value);
    product.subtotal = ((Number(product.sale_price) * product.cantidad) / 1.18).toFixed(2);
    product.total = (Number(product.sale_price) * Number(product.cantidad)).toFixed(2);

    this.collectionTemp.splice(idx, 1, product);
    this.calcTotalGlobal();

  }

  priceChange(val: any, product: IProductProcess, idx: number) {
    product.sale_price = val.value;
    product.subtotal = ((Number(product.sale_price) * Number(product.cantidad)) / 1.18).toFixed(2);
    product.total = (Number(product.sale_price) * Number(product.cantidad)).toFixed(2);

    this.collectionTemp.splice(idx, 1, product)
    this.calcTotalGlobal();
  }

  calcTotalGlobal() {
    if (this.collectionTemp.length > 0) {
      let total = this.collectionTemp.map(prod => Number(prod.total)).reduce((a, c) => a + c);

      this.totalGlobal = Number.parseFloat(total.toString()).toFixed(2);
      this.totalSinIGV = Number.parseFloat((total / 1.18).toString()).toFixed(2);
      this.totalTax = Number.parseFloat((total - (total / 1.18)).toString()).toFixed(2);
    }
  }

  deleteItem(idx: number) {
    this.collectionTemp.splice(idx, 1);
    this.calcTotalGlobal();
  }

}
