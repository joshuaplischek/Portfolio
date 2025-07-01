import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TranslatePipe } from '@ngx-translate/core';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, TranslatePipe, BurgerMenuComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  menuOpen = false;

  closeMenu(header: HeaderComponent) {
    this.menuOpen = false;
    header.resetBurgerMenu();
  }

  onToggleMenu(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}
