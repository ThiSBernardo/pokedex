import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private resource: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

   public apiListAllPokemons():Observable<any>{
     const url = `${this.resource}?offset=0&limit=1500`
    return this.http.get<any>(url).pipe(
      tap( res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url )

  }
}
