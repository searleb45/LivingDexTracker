import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnDetailComponent } from './pkmn-detail.component';

describe('PkmnDetailComponent', () => {
  let component: PkmnDetailComponent;
  let fixture: ComponentFixture<PkmnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkmnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
