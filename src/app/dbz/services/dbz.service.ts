import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 400
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
  ];

  registerCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
