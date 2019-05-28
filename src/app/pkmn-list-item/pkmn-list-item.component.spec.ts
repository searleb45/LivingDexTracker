import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnListItemComponent } from './pkmn-list-item.component';

describe('PkmnListItemComponent', () => {
  let component: PkmnListItemComponent;
  let fixture: ComponentFixture<PkmnListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkmnListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmnListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
