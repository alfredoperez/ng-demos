import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsSimpleStoreComponent } from './signals-simple-store.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SignalsSimpleStoreComponent', () => {
  let component: SignalsSimpleStoreComponent;
  let fixture: ComponentFixture<SignalsSimpleStoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SignalsSimpleStoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalsSimpleStoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
