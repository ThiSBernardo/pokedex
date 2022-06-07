import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokemons: any;
  public term: string;
  public currentPage: number = 0;

  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  public ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons()
      .subscribe(res => this.pokemons = res.results);
  }

  public onSearch(value: string) {
    this.term = value
  }

  public onPage(page: number){
    this.currentPage = page
  }
}
