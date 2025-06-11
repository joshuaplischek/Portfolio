import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
    this.isEnglish = true;
    // Hier Logik für Englisch einfügen
    console.log('Sprache auf Englisch gesetzt');
  }

  private setGerman() {
    this.isEnglish = false;
    // Hier Logik für Deutsch einfügen
    console.log('Sprache auf Deutsch gesetzt');
  }

  isMenuOpen = false;
  @Output() toggleMenu = new EventEmitter<boolean>();

  onMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenu.emit(this.isMenuOpen);
  }
}
