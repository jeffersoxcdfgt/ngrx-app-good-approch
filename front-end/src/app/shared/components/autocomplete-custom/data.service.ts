import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DataList, DATALIST } from './data-mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getByFilter(query: string) {
    const products = DATALIST.filter((product:DataList) => product.name.toLowerCase().includes(query.toLowerCase()))
    return of(products).pipe(delay(500));
  }
}
