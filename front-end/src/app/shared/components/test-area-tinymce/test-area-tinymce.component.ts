import { Component, OnInit } from '@angular/core';

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
export class TestAreaTinymceComponent implements OnInit {

  readonly CONFIG_TEXTEDITOR = CONFIG_TEXTEDITOR

  constructor() { }

  ngOnInit(): void {
  }

}
