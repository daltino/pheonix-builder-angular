import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishWordEditComponent } from './english-word-edit.component';

describe('EnglishWordEditComponent', () => {
  let component: EnglishWordEditComponent;
  let fixture: ComponentFixture<EnglishWordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishWordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishWordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
