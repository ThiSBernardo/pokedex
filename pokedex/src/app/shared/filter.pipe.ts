import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: any[] = [], term: string): any[] {
    if(!term){
      return value;
    }
    return value.filter(pokemon => {
      const safePokemon: string = pokemon.name.toLowerCase()
      const safeTerm: string = term?.toLowerCase()
      return safePokemon.includes(safeTerm)
    });
  }

}

