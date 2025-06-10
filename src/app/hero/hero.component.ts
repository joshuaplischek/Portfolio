import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, BurgerMenuComponent],
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

  onMouseEnterBtn(element: HTMLElement) {
    element.classList.remove('animate-dont-push');
    element.classList.add('animate-push');
  }

  onMouseLeaveBtn(element: HTMLElement) {
    element.classList.remove('animate-push');
    element.classList.add('animate-dont-push');
  }

  menuOpen = false;

  onToggleMenu() {
    this.menuOpen = !this.menuOpen; 
  }
}
