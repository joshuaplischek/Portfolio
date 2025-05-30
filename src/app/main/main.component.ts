import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from "../skills/skills.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, MyProjectsComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
