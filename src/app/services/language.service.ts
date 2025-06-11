import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isEnglishSubject = new BehaviorSubject<boolean>(false);
  isEnglish$ = this.isEnglishSubject.asObservable();

  constructor(private translate: TranslateService) {}

  toggleLanguage(isEnglish: boolean) {
    this.isEnglishSubject.next(isEnglish);
    this.translate.use(isEnglish ? 'en' : 'de');
  }
}