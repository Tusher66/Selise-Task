import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagComponent } from './main-pag.component';

describe('MainPagComponent', () => {
  let component: MainPagComponent;
  let fixture: ComponentFixture<MainPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
