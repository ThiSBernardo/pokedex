import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();



  constructor(
    // private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {

  }


  public onSearch(value: string) {
    this.emmitSearch.emit(value);
  }
}
