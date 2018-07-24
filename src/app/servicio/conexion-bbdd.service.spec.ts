import { TestBed, inject } from '@angular/core/testing';

import { ConexionBBDDService } from './conexion-bbdd.service';

describe('ConexionBBDDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionBBDDService]
    });
  });

  it('should be created', inject([ConexionBBDDService], (service: ConexionBBDDService) => {
    expect(service).toBeTruthy();
  }));
});
