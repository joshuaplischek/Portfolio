import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    onMouseEnterBtn(element: HTMLElement) {
    element.classList.remove('animate-dont-push');
    element.classList.add('animate-push');
  }

  onMouseLeaveBtn(element: HTMLElement) {
    element.classList.remove('animate-push');
    element.classList.add('animate-dont-push');
  }
}
