import { TestBed } from '@angular/core/testing';
import { VIDEOJUEGOS } from '../../mocks/Videojuegos';
import { VideojuegosService } from './videojuegos.service';

describe('VideojuegosService', () => {
  let service: VideojuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideojuegosService);
  });

  it('deberia crearse', () => {
    expect(service).toBeTruthy();
  });

  it('deberia retornar el catalogo de videojuegos', (done) => {
    service.getVideojuegos().subscribe((videojuegos) => {
      expect(videojuegos).toEqual(VIDEOJUEGOS);
      done();
    });
  });
});