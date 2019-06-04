import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGroupDetailComponent } from './word-group-detail.component';

describe('WordGroupDetailComponent', () => {
  let component: WordGroupDetailComponent;
  let fixture: ComponentFixture<WordGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
