import { Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `Hero ${this.name} has ${this.age} years old.`;
  }

  changeHeroName(): void {
    this.name = 'Ironman';
  }

  changeHeroAge(): void {
    this.age = 45;
  }

  resetHero(): void {
    this.name = 'Spiderman';
    this.age = 30;
  }

}
