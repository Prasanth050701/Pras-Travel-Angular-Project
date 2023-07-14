import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivedealsComponent } from './exclusivedeals.component';

describe('ExclusivedealsComponent', () => {
  let component: ExclusivedealsComponent;
  let fixture: ComponentFixture<ExclusivedealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusivedealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusivedealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
