import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
    constructor(private translate: TranslateService){}
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
  @Input() isOpen = false;
  @Output() menuClose = new EventEmitter<void>();

  closeMenu() {
    this.isOpen = false;
    this.menuClose.emit();
  }
}
