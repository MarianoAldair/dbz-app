import { Component } from '@angular/core';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {

  public heroes: string[] = ['Ironman', 'Spiderman', 'Superman', 'Batman'];
  public lastHeroDeleted?: string;

  deleteLastHero(): void {
    this.lastHeroDeleted = this.heroes.pop();
  }

}
