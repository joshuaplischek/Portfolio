import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
