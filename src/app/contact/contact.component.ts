import { Component, inject } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

interface ContactData {
privacy: boolean;
  name: string;
  email: string;
  message: string;
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
  showSuccessMessage = false;

onMouseEnterBtn(element: HTMLElement, form: NgForm) {
  if (form.valid && this.contactData.privacy) {
    element.classList.remove('animate-dont-push');
    element.classList.add('animate-push');
  }
}

onMouseLeaveBtn(element: HTMLElement, form: NgForm) {
  if (form.valid && this.contactData.privacy) {
    element.classList.remove('animate-push');
    element.classList.add('animate-dont-push');
  }
}

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  post = {
    endPoint: 'https://joshuaplischek.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text as const',
      },
    },
  };

  onSubmit(ngForm: NgForm, element: HTMLElement, form: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.onMouseLeaveBtn(element, form);
            ngForm.resetForm();
            this.showSuccessMessage = true; // Overlay anzeigen
            
            // Optional: Overlay nach 5 Sekunden automatisch schließen
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
            // Hier könntest du auch ein Error-Overlay anzeigen
          },
          complete: () => console.info('send mail complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showSuccessMessage = true; // Auch für Test-Modus
    }
  }

  closeSuccessMessage() {
    this.showSuccessMessage = false;
  }
}
