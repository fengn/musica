import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail';
import { HeroesComponent } from './heroes/heroes';
@NgModule({
	declarations: [HeroDetailComponent,
    HeroesComponent],
	imports: [],
	exports: [HeroDetailComponent,
    HeroesComponent]
})
export class ComponentsModule {}
