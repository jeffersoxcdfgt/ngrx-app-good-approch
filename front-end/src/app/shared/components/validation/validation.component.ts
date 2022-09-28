import { ChangeDetectorRef, Component, Input, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { cleanBlank, ifEmpty, onlyNumber, validateEmail } from './utils/validation';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  @Input() requiredfield = false;
  @Input() messagerequired: string = 'Field is required.';

  @Input() isnumeric = false;
  @Input() messageOnlyNumeric: string = 'Field is just numeric.';

  @Input() isemail = false;
  @Input() messageJustEmail: string = 'Field is just numeric.';

  required$:any = of(true);
  justnumeric$:any = of(true);
  justemail$:any = of(true);

  validFunction = tap((val) => val=== false? this.ngcontrol.control?.setErrors({}):this.ngcontrol.control?.clearValidators());
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
          break
          case 'isnumeric':{
            this.setErrorField();
            this.justnumeric$  =this.ngcontrol.control?.valueChanges.pipe(startWith(this.data),onlyNumber,this.validFunction);
          }
          break
          case 'isemail':{
            this.setErrorField();
            this.justemail$ =this.ngcontrol.control?.valueChanges.pipe(startWith(this.data),validateEmail,this.validFunction);
          }
          break
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
