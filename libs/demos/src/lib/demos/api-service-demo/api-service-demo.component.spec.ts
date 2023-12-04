import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiServiceDemoComponent } from './api-service-demo.component';

describe('ApiServiceDemoComponent', () => {
  let component: ApiServiceDemoComponent;
  let fixture: ComponentFixture<ApiServiceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiServiceDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
