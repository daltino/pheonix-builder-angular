import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishWordsComponent } from './english-words.component';

describe('EnglishWordsComponent', () => {
  let component: EnglishWordsComponent;
  let fixture: ComponentFixture<EnglishWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
