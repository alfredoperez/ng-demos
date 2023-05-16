import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgrxWithSignalsComponent } from './ngrx-with-signals.component';

describe('NgrxWithSignalsComponent', () => {
  let component: NgrxWithSignalsComponent;
  let fixture: ComponentFixture<NgrxWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWithSignalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
