import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlReferenceComponent } from './url-reference.component';

describe('UrlReferenceComponent', () => {
  let component: UrlReferenceComponent;
  let fixture: ComponentFixture<UrlReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
