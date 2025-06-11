import { Component, EventEmitter, Output } from '@angular/core';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}
  isEnglish = false;

  onLanguageChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.setEnglish();
    } else {
      this.setGerman();
    }
  }

  private setEnglish() {
    this.translate.use('en');
  }

  private setGerman() {
    this.translate.use('de');
  }

  resetBurgerMenu() {
    this.isMenuOpen = false;
    this.toggleMenu.emit(false);
  }

  isMenuOpen = false;
  @Output() toggleMenu = new EventEmitter<boolean>();

  onMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenu.emit(this.isMenuOpen);
  }
}
