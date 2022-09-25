import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { takeUntil} from 'rxjs/operators';
import { UnsubscribeComponent } from '../../unsubscribe/unsubscribe.component';

export const CONFIG_TEXTEDITOR = {
  plugins: 'link image code',
  toolbar: 'undo redo | bold italic sizeselect fontselect fontsizeselect | alignleft aligncenter alignright | code',
  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
  width: '100%' ,
  height: '400'
};

@Component({
  selector: 'app-test-area-tinymce',
  templateUrl: './test-area-tinymce.component.html',
  styleUrls: ['./test-area-tinymce.component.scss']
})
export class TestAreaTinymceComponent extends UnsubscribeComponent implements OnInit, ControlValueAccessor, OnChanges  {

  readonly CONFIG_TEXTEDITOR = CONFIG_TEXTEDITOR  
  @Input() data: string | undefined = '';
  formTiny: FormGroup;

  constructor(@Self() @Optional() public ngcontrol: NgControl, 
    private ref: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
      super();

    if(this.ngcontrol){
      this.ngcontrol.valueAccessor = this
    }

    this.formTiny = this.formBuilder.group({
      tinycontrol:[''],
    })
  }

  ngOnInit(): void { 
    this.formTiny.get('tinycontrol')?.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value)=>{
      this.onChangeFn(value);
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
       this.formTiny.get('tinycontrol')?.setValue(this.data)
       this.ngcontrol.valueAccessor?.writeValue(changes['data'].currentValue)
    }
  }

}
