import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BurgerMenuComponent } from "../../burger-menu/burger-menu.component";

@Component({
  selector: 'app-poke-dex',
  imports: [ProjectTemplateComponent, HeaderComponent, RouterLink, TranslatePipe, BurgerMenuComponent],
  templateUrl: './poke-dex.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class PokeDexComponent {
    menuOpen = false;

  closeMenu(header: HeaderComponent) {
    this.menuOpen = false;
    header.resetBurgerMenu();
  }

  onToggleMenu(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}
