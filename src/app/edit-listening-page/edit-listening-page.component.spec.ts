import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListeningPageComponent } from './edit-listening-page.component';

describe('EditListeningPageComponent', () => {
  let component: EditListeningPageComponent;
  let fixture: ComponentFixture<EditListeningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListeningPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListeningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
