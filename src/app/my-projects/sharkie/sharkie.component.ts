import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BurgerMenuComponent } from "../../burger-menu/burger-menu.component";

@Component({
  selector: 'app-sharkie',
  imports: [ProjectTemplateComponent, HeaderComponent, RouterLink, TranslatePipe, BurgerMenuComponent],
  templateUrl: './sharkie.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class SharkieComponent {
    menuOpen = false;

  closeMenu(header: HeaderComponent) {
    this.menuOpen = false;
    header.resetBurgerMenu();
  }

  onToggleMenu(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}
