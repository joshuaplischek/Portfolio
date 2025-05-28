import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from "../skills/skills.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, MyProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
