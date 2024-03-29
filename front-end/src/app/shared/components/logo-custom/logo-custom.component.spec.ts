import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LogoCustomComponent } from './logo-custom.component';

const onloadMock = {
  onload() {
    return 'value'
  }
}

const MockFileReader = {
  readAsDataURL(file: string) {
    return onloadMock
  }
}


describe('LogoCustomComponent', () => {
  let component: LogoCustomComponent;
  let fixture: ComponentFixture<LogoCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [LogoCustomComponent],
      providers: [
        {
          provide: FileReader, useValue: MockFileReader
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LogoCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dataaux === data', () => {
    component.dataaux = 'data'
    component.keep()
    expect(component.data).toBe(component.dataaux)
  });

  it('should click in image button', async () => {
    const spy = spyOn(component,'getFileContent').and.callThrough();
    const clickImage = fixture.debugElement.queryAll(By.css('.imageClick'))
    const rendered = clickImage[0].nativeElement;
    rendered.dispatchEvent(new Event('change'));    
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();   
  });

});
