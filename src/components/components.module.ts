import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail';
import { HeroesComponent } from './heroes/heroes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages';
import { DashboardComponent } from './dashboard/dashboard';

@NgModule({
	declarations: [HeroDetailComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent],
	imports: [BrowserModule, FormsModule],
	exports: [HeroDetailComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent]
})
export class ComponentsModule {}
