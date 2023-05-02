
import { Component, HostListener, Input, OnInit } from '@angular/core';;
import { of, BehaviorSubject, concat } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { DataList } from './data-mock';
import { DataService } from './data.service';


@Component({
  selector: 'app-autocomplete-custom',
  templateUrl: './autocomplete-custom.component.html',
  styleUrls: ['./autocomplete-custom.component.scss']
})
export class AutocompleteCustomComponent implements OnInit {

  searchStream$ = new BehaviorSubject<string>('');
  itemslist: DataList[] = [];
  showRender: boolean = false;
  info: string = ''
  @Input() lable: string = 'Title'

  constructor(private dataService: DataService) { }

  obs$ = this.searchStream$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((query) =>
      concat(
        of({ type: 'start' }),
        this.dataService.getByFilter(query).pipe(map(value => ({ type: 'finish', value })) /*,map((val) => query ? val: [])*/ )
      ))
  );

  ngOnInit(): void {
  }

  selectItem(value: DataList): void {
    this.itemslist.push(value)
    this.uniqueValue(value)
  }

  uniqueValue(row: DataList): void {
    const listId = this.itemslist.map((rop: DataList) => rop.id)
    const uniquesId = Array.from(new Set(listId.map((c: number) => c)))
    const data = uniquesId.map((valueid: number) => this.itemslist.find((prvalue: DataList) => prvalue.id === valueid))
    this.itemslist = data as DataList[];
  }

  removeItem(row: DataList): void {
    const datafilter = this.itemslist.filter((rpro: DataList) => rpro.id !== row.id)
    this.itemslist = datafilter as DataList[];
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
