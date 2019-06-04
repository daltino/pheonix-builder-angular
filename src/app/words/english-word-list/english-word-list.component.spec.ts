import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishWordListComponent } from './english-word-list.component';

describe('EnglishWordListComponent', () => {
  let component: EnglishWordListComponent;
  let fixture: ComponentFixture<EnglishWordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishWordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishWordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
