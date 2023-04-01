import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';

describe('FriendsTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FriendsTableModule],
      providers: [FriendsNamesPipe],
    });
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the visible columns', () => {
      // component.visibleColumns = [];
      // component.friends = of([]);
      // component.ngOnInit();
      // expect(component.visibleColumns).toEqual([
      //   'name',
      //   'created',
      //   'age',
      //   'kids',
      //   'friends',
      // ]);
    });
  });
});
