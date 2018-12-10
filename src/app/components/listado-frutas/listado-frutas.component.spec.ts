import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFrutasComponent } from './listado-frutas.component';

describe('ListadoFrutasComponent', () => {
  let component: ListadoFrutasComponent;
  let fixture: ComponentFixture<ListadoFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
