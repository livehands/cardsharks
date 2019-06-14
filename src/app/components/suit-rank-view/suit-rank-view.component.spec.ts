import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitRankViewComponent } from './suit-rank-view.component';

describe('SuitRankViewComponent', () => {
  let component: SuitRankViewComponent;
  let fixture: ComponentFixture<SuitRankViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitRankViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitRankViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
