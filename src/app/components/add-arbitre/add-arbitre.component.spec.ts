import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArbitreComponent } from './add-arbitre.component';

describe('AddArbitreComponent', () => {
  let component: AddArbitreComponent;
  let fixture: ComponentFixture<AddArbitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArbitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
