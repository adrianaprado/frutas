import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorFrutasComponent } from './comparador-frutas.component';

describe('ComparadorFrutasComponent', () => {
  let component: ComparadorFrutasComponent;
  let fixture: ComponentFixture<ComparadorFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparadorFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparadorFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
