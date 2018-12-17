import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstUsuarioComponent } from './lst-usuario.component';

describe('LstUsuarioComponent', () => {
  let component: LstUsuarioComponent;
  let fixture: ComponentFixture<LstUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
