import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoiveComponent } from './edit-moive.component';

describe('EditMoiveComponent', () => {
  let component: EditMoiveComponent;
  let fixture: ComponentFixture<EditMoiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
