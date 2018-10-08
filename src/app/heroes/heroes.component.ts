import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

constructor(private HeroService: HeroService)
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  //heroes = HEROES;
  /*
  hero:Hero =  {
    id : 1,
    name : 'Windstorm'
  };
*/
  
  constructor() {}

  ngOnInit() {
    this.getHeroes();
  }

}

getHeroes():void{
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
}

/*getHeroes(): void{
  this.heroes = this.HeroService.getHeroes();
}*/
