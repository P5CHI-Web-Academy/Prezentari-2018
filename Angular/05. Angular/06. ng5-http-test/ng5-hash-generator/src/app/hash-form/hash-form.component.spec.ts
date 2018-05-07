import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashFormComponent } from './hash-form.component';

describe('HashFormComponent', () => {
  let component: HashFormComponent;
  let fixture: ComponentFixture<HashFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
