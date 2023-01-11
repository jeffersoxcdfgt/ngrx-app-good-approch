import { ChangeDetectorRef, Component, HostListener, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-logo-custom',
  templateUrl: './logo-custom.component.html',
  styleUrls: ['./logo-custom.component.scss']
})
export class LogoCustomComponent implements ControlValueAccessor, OnChanges  {

  dataInputCtrl: FormControl =  new FormControl();  
  @Input() data: string | undefined = '';
  dataaux: string | undefined = '';


  constructor(@Self() @Optional() public ngcontrol: NgControl, private ref: ChangeDetectorRef) {
    if(this.ngcontrol){
      this.ngcontrol.valueAccessor = this
    }
   // this.ngcontrol && (this.ngcontrol.valueAccessor = this);
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

  imagePreview(e:any): void{
     const res = (e.target as HTMLInputElement).files;
     if(res){
      const image = res[0]
      this.getFileContent(image);
     }
  }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt:any): void{
    evt.preventDefault();
    evt.stopPropagation();
  }

  // Dragleave listener
  /*@HostListener('dragover', ['$event']) onDragLeave(evt:any): void{
      evt.preventDefault();
      evt.stopPropagation();
  }*/

  // Drop listener
   @HostListener('drop', ['$event']) ondrop(evt:any): void{
    evt.preventDefault();
    evt.stopPropagation();
    this.getFileContent(evt.dataTransfer.files[0]);
  }

  getFileContent = (datafile:any) => {
    try {
      const file = datafile;
      const reader = new FileReader();
      reader.onload = () => {
        this.data = reader.result as string;
        this.onChangeFn(this.data);
      };
      reader.readAsDataURL(file);
      
    } catch (error) {
        console.log('managen error to load images')
    }
   }

   keep():void{
      if(this.dataaux!==''){
        this.data = this.dataaux
      }
   }

  ngOnChanges(changes: SimpleChanges) {
    if(!!changes['data']?.currentValue){
      this.data = changes['data'].currentValue;
      this.dataaux = changes['data'].currentValue;
      this.dataInputCtrl.setValue(this.data )
      this.ngcontrol.valueAccessor?.writeValue(changes['data'].currentValue)
    }
  }

}
