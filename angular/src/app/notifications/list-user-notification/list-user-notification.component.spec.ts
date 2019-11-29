import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserNotificationComponent } from './list-user-notification.component';

describe('ListUserNotificationComponent', () => {
  let component: ListUserNotificationComponent;
  let fixture: ComponentFixture<ListUserNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
