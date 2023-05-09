import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeCompanyComponent } from './change-company.component';

describe('IncreaseCountComponent', () => {
  let component: ChangeCompanyComponent;
  let fixture: ComponentFixture<ChangeCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
