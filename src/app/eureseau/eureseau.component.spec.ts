import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EureseauComponent } from './eureseau.component';

describe('EureseauComponent', () => {
  let component: EureseauComponent;
  let fixture: ComponentFixture<EureseauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EureseauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EureseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
