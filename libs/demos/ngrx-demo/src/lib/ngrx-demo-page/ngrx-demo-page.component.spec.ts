import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDemoPageComponent } from './ngrx-demo-page.component';

describe('NgrxDemoPageComponent', () => {
  let component: NgrxDemoPageComponent;
  let fixture: ComponentFixture<NgrxDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxDemoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
