import { Component, EventEmitter, Output } from '@angular/core';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  isEnglish = false;
  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor(private languageService: LanguageService) {

    this.languageService.isEnglish$.subscribe(
      isEnglish => this.isEnglish = isEnglish
    );
  }

  onLanguageChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.languageService.toggleLanguage(checkbox.checked);
  }

  onMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenu.emit(this.isMenuOpen);
  }

  resetBurgerMenu() {
    this.isMenuOpen = false;
    this.toggleMenu.emit(false);
  }
}