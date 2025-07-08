import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BurgerMenuComponent } from '../../burger-menu/burger-menu.component';

@Component({
  selector: 'app-join',
  imports: [BurgerMenuComponent ,ProjectTemplateComponent, HeaderComponent, RouterModule, TranslatePipe],
  templateUrl: './join.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class JoinComponent {
    menuOpen = false;

  closeMenu(header: HeaderComponent) {
    this.menuOpen = false;
    header.resetBurgerMenu();
  }

  onToggleMenu(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}
