import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-logo-custom',
  templateUrl: './logo-custom.component.html',
  styleUrls: ['./logo-custom.component.scss']
})
export class LogoCustomComponent implements OnInit,  ControlValueAccessor, OnChanges  {

  dataInputCtrl: FormControl =  new FormControl();  
  @Input() data: string | undefined = '';


  constructor(@Self() @Optional() public ngcontrol: NgControl, private ref: ChangeDetectorRef) {
    if(this.ngcontrol){
      this.ngcontrol.valueAccessor = this
    }
   // this.ngcontrol && (this.ngcontrol.valueAccessor = this);
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
    this.onChangeFn(this.data);
  }

  public onChange($event:any): void {
    this.ref.detectChanges()
    this.onChangeFn($event?.value.trim());
  }


  ngOnChanges(changes: SimpleChanges) {
    if(!!changes['data']?.currentValue){
      this.data = changes['data'].currentValue
      this.dataInputCtrl.setValue(this.data )
      this.ngcontrol.valueAccessor?.writeValue(changes['data'].currentValue)
    }
  }

}
