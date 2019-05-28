import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnListComponent } from './pkmn-list.component';

describe('PkmnListComponent', () => {
  let component: PkmnListComponent;
  let fixture: ComponentFixture<PkmnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkmnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
