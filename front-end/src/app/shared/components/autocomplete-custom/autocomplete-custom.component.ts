
import { Component, HostListener, OnInit } from '@angular/core';;
import { of, BehaviorSubject, concat } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Products } from './products-mock';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-autocomplete-custom',
  templateUrl: './autocomplete-custom.component.html',
  styleUrls: ['./autocomplete-custom.component.scss']
})
export class AutocompleteCustomComponent implements OnInit {

  searchStream$ = new BehaviorSubject<string>('');
  itemslist: Products[] = [];
  showRender: boolean = false;
  info: string = ''

  constructor(private productsService: ProductsService) { }

  obs$ = this.searchStream$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((query) =>
      concat(
        of({ type: 'start' }),
        this.productsService.getByFilter(query).pipe(map(value => ({ type: 'finish', value })) ,map((val) => query ? val: []))
      ))
  );

  ngOnInit(): void {
  }

  selectItem(value: Products): void {
    this.itemslist.push(value)
    this.uniqueValue(value)
  }

  uniqueValue(row: Products): void {
    const listId = this.itemslist.map((rop: Products) => rop.id)
    const uniquesId = Array.from(new Set(listId.map((c: number) => c)))
    const data = uniquesId.map((valueid: number) => this.itemslist.find((prvalue: Products) => prvalue.id === valueid))
    this.itemslist = data as Products[];
  }

  removeItem(row: Products): void {
    const datafilter = this.itemslist.filter((rpro: Products) => rpro.id !== row.id)
    this.itemslist = datafilter as Products[];
  }

  @HostListener('keydown')
  handleKeyboardEvent(): void {
    this.showRender = true;
  }

  cleanInput():void{
    this.info = '';
    this.showRender = false;
  }

}
