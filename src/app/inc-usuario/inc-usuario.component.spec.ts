import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncUsuarioComponent } from './inc-usuario.component';

describe('IncUsuarioComponent', () => {
  let component: IncUsuarioComponent;
  let fixture: ComponentFixture<IncUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
