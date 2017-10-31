import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSetComponent } from './letter-set.component';

describe('LetterSetComponent', () => {
  let component: LetterSetComponent;
  let fixture: ComponentFixture<LetterSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
