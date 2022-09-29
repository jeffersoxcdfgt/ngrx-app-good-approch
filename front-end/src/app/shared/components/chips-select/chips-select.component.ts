import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnChanges, Optional, Self, SimpleChanges, ViewChild } from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

const NOEXISTELEMENT = 0;
interface DataLoad {
  id: string;
  name: string;
}

@Component({
  selector: 'app-chips-select',
  templateUrl: './chips-select.component.html',
  styleUrls: ['./chips-select.component.scss']
})
export class ChipsSelectComponent implements OnChanges, ControlValueAccessor {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  dataCtrl = new FormControl<any | string | DataLoad | null>({});
  filteredData: Observable<any|DataLoad[]> = new  Observable<DataLoad[]>() ;
  @Input() dataset: DataLoad[] =  [];
  @Input() allData:  DataLoad[] = [];
  @Input() placeholder = '';
  @Input() type = 'multi';
  tempoData:  DataLoad[] = [];
  defaultValue:any|DataLoad[]=[{ id:'1',name:'Apple'}]


  @ViewChild('dataInput') dataInput: any | ElementRef<HTMLInputElement>;
  infosave:any;

  constructor(@Self() @Optional() public ngcontrol: NgControl, private ref: ChangeDetectorRef) {
    if(this.ngcontrol){
      this.ngcontrol.valueAccessor = this
    }
  }

    /**
   * Implementation of the methods of the ControlValueAccessor interface
   */

  public onChangeFn = (_: any) => {};
  public onTouchedFn = () => {};
   
  public registerOnChange(fn: any): void {
     this.onChangeFn = fn;
  }
   
  public registerOnTouched(fn: any): void {
     this.onTouchedFn = fn;
  }
  public writeValue(obj: any): void { }
   
  public onChange($event:any): void {
    this.ref.detectChanges()
    this.onChangeFn($event?.value.trim());
  }

  
  loadData():void{
    this.filteredData = this.dataCtrl.valueChanges.pipe(
      startWith(null),
      map((info: any |DataLoad) => (info ? this._filter(info) : this.allData.slice())),
    );
  }  
  
  remove(value: any): void {
    const index = this.dataset.findIndex((val)=>  val.id === value.id);
    if (index >= 0) {
      this.dataset.splice(index, 1);
      this.onChangeFn(this.dataset);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const res = this.dataset.filter((row)=> row.id === event.option.value.id)
    if(res.length === NOEXISTELEMENT){
      this.dataset.push(event.option.value);
      this.dataInput.nativeElement.value = '';
      this.dataCtrl.setValue(null);  
      this.onChangeFn(this.dataset);
    }    
  }

  private _filter(value: DataLoad | string |any ): DataLoad[] {
    let filterValue='';  
    if(typeof value === 'string'){  
      filterValue = value;   
    }
    else{
      filterValue = value.name.toLowerCase()
    }
    const res = this.allData.filter(dataval => dataval.name.toLowerCase().includes(filterValue));
    return res
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (!!changes['allData']?.currentValue){
      this.loadData()
    }
    if (!!changes['dataset']?.currentValue){
      this.onChangeFn(changes['dataset']?.currentValue);
      this.tempoData = changes['dataset']?.currentValue
    }
    if (!!changes['type']?.currentValue && changes['type']?.currentValue === 'single'){
      const mapVaues:any | string | DataLoad | null= this.tempoData.find((val:DataLoad|undefined) => val);
      this.dataCtrl = new FormControl<string | DataLoad>(mapVaues);
    }
  }

  displayFn(data: DataLoad): string {
    return data && data.name ? data.name : '';
  }

  optionSelected(event: MatAutocompleteSelectedEvent):void{
    this.dataset= [event.option.value];
    this.onChangeFn(this.dataset);
  }

  @HostListener('click') onClick():void{
    this.loadData()
  }

}
