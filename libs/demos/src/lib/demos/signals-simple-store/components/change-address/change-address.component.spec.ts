import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeAddressComponent } from './change-address.component';

describe('ResetCountComponent', () => {
  let component: ChangeAddressComponent;
  let fixture: ComponentFixture<ChangeAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
