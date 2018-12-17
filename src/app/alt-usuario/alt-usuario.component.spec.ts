import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltUsuarioComponent } from './alt-usuario.component';

describe('AltUsuarioComponent', () => {
  let component: AltUsuarioComponent;
  let fixture: ComponentFixture<AltUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
