import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniappsComponent } from './miniapps.component';

describe('MiniappsComponent', () => {
  let component: MiniappsComponent;
  let fixture: ComponentFixture<MiniappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
