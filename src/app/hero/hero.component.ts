import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  
  onMouseEnter(element: HTMLElement) {
    element.classList.remove('animate-out');
    element.classList.remove('fade');
    element.classList.add('animate-in');
  }

  onMouseLeave(element: HTMLElement) {
    element.classList.remove('animate-in');
    element.classList.add('fade');
    element.classList.add('animate-out');
  }
}
