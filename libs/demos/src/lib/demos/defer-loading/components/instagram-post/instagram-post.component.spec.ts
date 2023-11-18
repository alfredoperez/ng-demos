import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstagramPostComponent } from './instagram-post.component';

describe('InstagramPostComponent', () => {
  let component: InstagramPostComponent;
  let fixture: ComponentFixture<InstagramPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstagramPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
