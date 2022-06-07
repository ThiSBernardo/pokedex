import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public paginaAtual: number = 1;
public pokemons: any[] = []

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons(0).subscribe(
      res => {
        this.pokemons = res.results;
      })
  }

public onChangePage(page:number) {
  this.pokeApiService.apiListAllPokemons(page).subscribe(
    res => {
      this.pokemons = res.results;
    })
}
  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
