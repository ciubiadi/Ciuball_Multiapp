import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniappComponent } from './miniapp.component';

describe('MiniappComponent', () => {
  let component: MiniappComponent;
  let fixture: ComponentFixture<MiniappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
