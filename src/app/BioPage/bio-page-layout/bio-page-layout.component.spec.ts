import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPageLayoutComponent } from './bio-page-layout.component';

describe('BioPageLayoutComponent', () => {
  let component: BioPageLayoutComponent;
  let fixture: ComponentFixture<BioPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
