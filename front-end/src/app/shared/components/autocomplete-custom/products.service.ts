import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Products, PRODUCTS } from './products-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getByFilter(query: string) {
    const products = PRODUCTS.filter((product:Products) => product.name.toLowerCase().includes(query.toLowerCase()))
    return of(products).pipe(delay(500));
  }
}
