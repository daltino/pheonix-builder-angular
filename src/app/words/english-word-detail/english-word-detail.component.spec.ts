import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishWordDetailComponent } from './english-word-detail.component';

describe('EnglishWordDetailComponent', () => {
  let component: EnglishWordDetailComponent;
  let fixture: ComponentFixture<EnglishWordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishWordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishWordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
