import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class DbzListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteCharacterEmitter: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacterById(id: string): void {
    this.onDeleteCharacterEmitter.emit(id);
  }

}
