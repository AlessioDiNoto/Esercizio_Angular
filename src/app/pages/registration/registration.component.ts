import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationForm = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.gmailValidator,
        this.onlyLettersBeforeAt,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.passwordsMatchValidator }
  );

  submitted = false;

  get nome() {
    return this.registrationForm.get('nome')!;
  }
  get email() {
    return this.registrationForm.get('email')!;
  }
  get password() {
    return this.registrationForm.get('password')!;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')!;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submitted = true;
      console.log(this.registrationForm.value);
    }
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordsMismatch: true };
  }

  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { gmail: true };
    }
    return null;
  }

  onlyLettersBeforeAt(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email) {
      const parts = email.split('@');
      if (parts.length > 1) {
        const localPart = parts[0];
        const onlyLettersBeforeAt = /^[a-zA-Z]+$/;
        if (!onlyLettersBeforeAt.test(localPart)) {
          return { onlyLetters: true };
        }
      }
    }
    return null;
  }
}
