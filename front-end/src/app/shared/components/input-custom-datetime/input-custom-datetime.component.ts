import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { takeUntil} from 'rxjs/operators';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { UnsubscribeComponent } from '../../unsubscribe/unsubscribe.component';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

enum DATE {
  DAY = 0,
  MONTH = 1,
  YEAR = 2
}

@Component({
  selector: 'app-input-custom-datetime',
  templateUrl: './input-custom-datetime.component.html',
  styleUrls: ['./input-custom-datetime.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class InputCustomDatetimeComponent  extends UnsubscribeComponent  implements OnInit, OnChanges, ControlValueAccessor {

  @Input() data: string | undefined = '';
  dataInputCtrl: FormControl =  new FormControl();

  constructor(@Self() @Optional() public ngcontrol: NgControl, private ref: ChangeDetectorRef) {
    super()
    if(this.ngcontrol){
      this.ngcontrol.valueAccessor = this
    }
  }

  ngOnInit(): void {
    this.dataInputCtrl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value)=>{
     const myMomentObject = moment(value).format("DD.MM.YYYY");
      this.onChangeFn(myMomentObject);
    })
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
  public writeValue(obj: any): void {
    this.onChangeFn(this.data);
  }

  public onChange($event:any): void {
    this.ref.detectChanges()
    this.onChangeFn($event?.value.trim());
  }

  public onBlur(): void {
    this.onTouchedFn();
  }


  ngOnChanges(changes: SimpleChanges) {
    if(!!changes['data']?.currentValue){
      this.data = changes['data'].currentValue
      this.dataInputCtrl.setValue(this.data )
      this.dataInputCtrl = new FormControl(moment(this.getDate(changes['data'].currentValue)));
      this.ngcontrol.valueAccessor?.writeValue(changes['data'].currentValue)
    }
  }

  getDate(date: string):number[]{
    const value = date.split('.');
    const resnumber = value.map((res) => Number(res));
    const resdata = [resnumber[DATE.YEAR],(resnumber[DATE.MONTH]-1),resnumber[DATE.DAY]]
    return resdata
  }

}
