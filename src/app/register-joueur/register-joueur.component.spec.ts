import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJoueurComponent } from './register-joueur.component';

describe('RegisterJoueurComponent', () => {
  let component: RegisterJoueurComponent;
  let fixture: ComponentFixture<RegisterJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
