import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-burger-menu',
  imports: [TranslatePipe],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Input() isOpen = false;
  @Output() menuClose = new EventEmitter<void>();
  isEnglish = false;

  constructor(private languageService: LanguageService) {
    this.languageService.isEnglish$.subscribe(
      isEnglish => this.isEnglish = isEnglish
    );
  }

  onLanguageChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.languageService.toggleLanguage(checkbox.checked);
  }

  ngOnChanges() {
    if (this.isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  ngOnDestroy() {
    document.body.classList.remove('menu-open');
  }

  closeMenu() {
    this.isOpen = false;
    this.menuClose.emit();
  }
}
