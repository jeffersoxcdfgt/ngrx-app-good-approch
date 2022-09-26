import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { cleanBlank, ifEmpty } from './utils/validation';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  @Input() requiredfield = false;
  required$:any = of(true);
  validFunction = tap((val) => val=== false? this.ngcontrol.control?.setErrors({}):this.ngcontrol.control?.clearValidators());
  @Input() messagerequired: string = 'Field is required.';
  data: string = ''

  constructor(@Self() @Optional() public ngcontrol: NgControl, private ref: ChangeDetectorRef) {
    if(this.ngcontrol){
      this.ngcontrol.valueAccessor = this
    }
  }

  ngOnInit(): void {
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
    this.data = obj
  }

  public onChange($event:any): void {
    this.ref.detectChanges()
    this.onChangeFn($event?.value.trim());
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'requiredfield': {
            this.setErrorField();
            this.required$ = this.ngcontrol.control?.valueChanges.pipe(startWith(this.data),cleanBlank,ifEmpty,this.validFunction);
          }
        }
      }
    }
  }

  setErrorField(): void{
    if(this.data===''){
      this.ngcontrol.control?.setErrors({})
    }
  }

}
