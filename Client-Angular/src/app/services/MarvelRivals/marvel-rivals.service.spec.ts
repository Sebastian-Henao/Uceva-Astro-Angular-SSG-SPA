import { TestBed } from '@angular/core/testing';

import { MarvelRivalsService } from './marvel-rivals.service';
import { PERSONAJES_MARVEL_RIVALS } from '../../data/MarvelRivals.interface';

describe('MarvelRivalsService', () => {
  let service: MarvelRivalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelRivalsService);
  });

  describe('Creacion del servicio', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('getAllMarvelRivals deberia retornar un observable con los personajes', (done) => {
      service.getAllMarvelRivals().subscribe(marvelRivals => {
        expect(marvelRivals).toEqual(PERSONAJES_MARVEL_RIVALS);
        expect(marvelRivals.length).toBe(PERSONAJES_MARVEL_RIVALS.length);
        done();
      });
    });
  });
});
