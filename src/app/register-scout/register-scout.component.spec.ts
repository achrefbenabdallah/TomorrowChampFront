import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScoutComponent } from './register-scout.component';

describe('RegisterScoutComponent', () => {
  let component: RegisterScoutComponent;
  let fixture: ComponentFixture<RegisterScoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterScoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
