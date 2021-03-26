import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTestComponent } from './title-test.component';

describe('TitleTestComponent', () => {
  let component: TitleTestComponent;
  let fixture: ComponentFixture<TitleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
