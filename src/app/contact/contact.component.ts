import { Component, inject } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

interface ContactData {
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, FormsModule, CommonModule, TranslatePipe, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  isSubmitting = false;
  mailTest = false;

  onMouseEnterBtn(element: HTMLElement) {
    element.classList.remove('animate-dont-push');
    element.classList.add('animate-push');
  }

  onMouseLeaveBtn(element: HTMLElement) {
    element.classList.remove('animate-push');
    element.classList.add('animate-dont-push');
  }

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  post = {
    endPoint: 'https://joshuaplischek.de/sendMail.php',
    body: (payload: ContactData) => JSON.stringify(payload), // Typ spezifizieren
    options: {
      headers: {
        'Content-Type': 'application/json', // auf application/json ändern
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    // Alle Felder als berührt markieren, unabhängig von der Validität
    Object.keys(ngForm.controls).forEach((key) => {
      const control = ngForm.controls[key];
      control.markAsTouched();
    });
  
    if (!ngForm.valid) {
      return; // Hier früh aussteigen wenn das Formular nicht valid ist
    }
  
    this.isSubmitting = true;
  
    if (!this.mailTest) { // Prüfung auf ngForm.submitted entfernt
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            console.info('Mail sent successfully');
            ngForm.resetForm();
            this.isSubmitting = false;
          },
          error: (error) => {
            console.error('Error sending mail:', error);
            this.isSubmitting = false;
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
