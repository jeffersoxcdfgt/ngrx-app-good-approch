import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCustomComponent } from './autocomplete-custom.component';

describe('AutocompleteCustomComponent', () => {
  let component: AutocompleteCustomComponent;
  let fixture: ComponentFixture<AutocompleteCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call selectItem() and itemslist > 0 ', () => {
      const element = {id:1, name:'Samsung'}
      component.selectItem(element)
      expect(component.itemslist.length > 0).toBe(true)
  });

  it('should call removeItem() and itemslist = 0 ', () => {
    const element = {id:1, name:'Samsung'}
    component.removeItem(element)
    expect(component.itemslist.length === 0).toBe(true)
  });

  it('should call handleKeyboardEvent() ', () => {
    component.handleKeyboardEvent()
    expect(component.showRender).toEqual(true)
  });

  it('should call cleanInput() ', () => {
    component.cleanInput()
    expect(component.showRender).toEqual(false)
  });

});
