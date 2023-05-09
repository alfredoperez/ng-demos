import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeNameComponent } from './change-name.component';

describe('DecreaseCountComponent', () => {
  let component: ChangeNameComponent;
  let fixture: ComponentFixture<ChangeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
