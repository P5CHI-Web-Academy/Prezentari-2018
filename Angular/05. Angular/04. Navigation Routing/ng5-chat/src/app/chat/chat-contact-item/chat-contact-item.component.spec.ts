import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContactItemComponent } from './chat-contact-item.component';

describe('ChatContactItemComponent', () => {
  let component: ChatContactItemComponent;
  let fixture: ComponentFixture<ChatContactItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatContactItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
