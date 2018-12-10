import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFrutasComponent } from './gestion-frutas.component';

describe('GestionFrutasComponent', () => {
  let component: GestionFrutasComponent;
  let fixture: ComponentFixture<GestionFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
