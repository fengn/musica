import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail';
import { HeroesComponent } from './heroes/heroes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [HeroDetailComponent,
    HeroesComponent],
	imports: [BrowserModule, FormsModule],
	exports: [HeroDetailComponent,
    HeroesComponent]
})
export class ComponentsModule {}
