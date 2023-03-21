import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubdashboardComponent } from './admin-subdashboard.component';

describe('AdminSubdashboardComponent', () => {
  let component: AdminSubdashboardComponent;
  let fixture: ComponentFixture<AdminSubdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
