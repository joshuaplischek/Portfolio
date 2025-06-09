import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  isDefaultImage = true;

  toggleImage(img: HTMLElement, interested: HTMLElement) {
    this.isDefaultImage = !this.isDefaultImage;
    if (!this.isDefaultImage) {
      img.classList.remove('pull-to-peel-animation');
      img.classList.add('vanishing-image');
      interested.classList.add('appearing-image');
    } else {
      interested.classList.remove('appearing-image');
      img.classList.remove('vanishing-image');
      img.classList.add('pull-to-peel-animation');
    }
  }
}
