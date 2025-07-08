import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslatePipe, HeaderComponent, BurgerMenuComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
    menuOpen = false;

  closeMenu(header: HeaderComponent) {
    this.menuOpen = false;
    header.resetBurgerMenu();
  }

  onToggleMenu(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}
