import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationLoadingComponent } from './presentation-loading.component';

describe('PresentationLoadingComponent', () => {
  let component: PresentationLoadingComponent;
  let fixture: ComponentFixture<PresentationLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
