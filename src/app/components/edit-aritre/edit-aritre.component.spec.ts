import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAritreComponent } from './edit-aritre.component';

describe('EditAritreComponent', () => {
  let component: EditAritreComponent;
  let fixture: ComponentFixture<EditAritreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAritreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAritreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
