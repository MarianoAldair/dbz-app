import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class DbzAddCharacterComponent {

  @Output()
  public onCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if(this.character.name.length === 0) return;
    this.onCharacter.emit(this.character);
    this.character = { id: '', name: '', power: 0 };
  }

}
