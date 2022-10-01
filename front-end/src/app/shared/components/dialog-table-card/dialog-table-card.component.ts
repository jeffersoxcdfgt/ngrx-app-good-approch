import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-table-card',
  templateUrl: './dialog-table-card.component.html',
  styleUrls: ['./dialog-table-card.component.scss']
})
export class DialogTableCardComponent implements OnInit {

  selection$:Observable<string> = new Observable<string>()
  setType:string = '';

  ngOnInit(): void {
  }

  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogTableCardComponent>) {
      if(data){
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
        if(data.opt){
          this.selection$ = data.opt;
        }
      }
  }

  changesOpt($event:string):void{
    this.setType= $event;
  }

  onConfirmClick(): void {
    this.dialogRef.close({
      opt:true,
      value:this.setType
    });
  }
}
