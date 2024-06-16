import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIndividualComponent } from './usuario-individual.component';

describe('UsuarioIndividualComponent', () => {
  let component: UsuarioIndividualComponent;
  let fixture: ComponentFixture<UsuarioIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
