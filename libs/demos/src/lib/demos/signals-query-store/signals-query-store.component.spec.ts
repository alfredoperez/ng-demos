import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsQueryStoreComponent } from './signals-query-store.component';

describe('SignalsQueryStoreComponent', () => {
  let component: SignalsQueryStoreComponent;
  let fixture: ComponentFixture<SignalsQueryStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsQueryStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsQueryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
