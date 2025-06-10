import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Input() isOpen = false;
}
