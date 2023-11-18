import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostCommentsComponent } from './post-comments.component';

describe('PostComponentsComponent', () => {
  let component: PostCommentsComponent;
  let fixture: ComponentFixture<PostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCommentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
