import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgEditComponent } from './bolg-edit.component';

describe('BolgEditComponent', () => {
  let component: BolgEditComponent;
  let fixture: ComponentFixture<BolgEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
