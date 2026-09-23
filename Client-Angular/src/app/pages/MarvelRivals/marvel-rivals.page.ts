import { Component, inject } from '@angular/core';
import { MarvelRivalsTableComponent } from '../../components/MarvelRivals-table/marvel-rivals-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { MarvelRivals } from '../../interfaces/MarvelRivals.interface';
import { State } from '../../interfaces/state.interface';
import { MarvelRivalsService } from '../../services/MarvelRivals/marvel-rivals.service';

@Component({
  selector: 'app-marvel-rivals',
  imports: [MarvelRivalsTableComponent, AlertComponent],
  templateUrl: './marvel-rivals.page.html',
})
export class MarvelRivalsPage {
  Marvelrivals: MarvelRivals[] = [];
    state: State = 'init';
  private marvelRivalsService = inject(MarvelRivalsService);
  ngOnInit(): void {
    this.state = 'loading';
    this.marvelRivalsService.getAllMarvelRivals().subscribe({
      next: (Marvelrivals) => {
        this.Marvelrivals = Marvelrivals;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
