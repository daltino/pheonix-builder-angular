import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGroupListComponent } from './word-group-list.component';

describe('WordGroupListComponent', () => {
  let component: WordGroupListComponent;
  let fixture: ComponentFixture<WordGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
