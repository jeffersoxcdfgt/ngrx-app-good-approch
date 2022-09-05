import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Optional, Output, Self, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss']
})
export class InputCustomComponent implements OnInit, ControlValueAccessor, OnChanges  {
  @Input() label: string = '';
  @ViewChild('inputElement') inputElement: ElementRef|any;
  dataInputCtrl: FormControl =  new FormControl();
  
  @Input() data: string = '';
  @Input() type: string = 'input';
  @Input() width: string = '100%';
  @Input() height: string = '40px';
  @Input() labelAlign: string = 'left';
  @Input() inputAlign: string = 'left';
  @Input() placeholder = ""
  @Input() messageRequired: string = ''
  @Output() clickOutput = new EventEmitter();

  constructor(@Self() @Optional() public ngcontrol: NgControl, private ref: ChangeDetectorRef) {
    this.ngcontrol && (this.ngcontrol.valueAccessor = this);
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

  public getClick(): void{
     this.clickOutput.emit()
  }

  public onBlur(): void {
    this.onTouchedFn();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!!changes['data']?.currentValue){
      this.data = changes['data'].currentValue
      this.dataInputCtrl.setValue(this.data )
    }
  }
}
