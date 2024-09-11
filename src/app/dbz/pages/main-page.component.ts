import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent {

  get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  constructor(private _dbzService: DbzService) { }

  onDeleteCharacter(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }

  registerCharacter(character: Character): void {
    this._dbzService.registerCharacter(character);
  }
}
