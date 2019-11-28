import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';
import { passwordMatchValidator } from '../shared/directives/password-match.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html'
})
export class CambioClaveComponent implements OnInit {
  passwordForm: any;

  constructor(private formBuilder: FormBuilder, 
              private router: Router) {

    this.passwordForm = this.formBuilder.group({
      password: [
        '',
        [Validators.required, ValidationService.passwordValidator]
      ],
      passwordComprobar: [
        '',
        [Validators.required]
      ]
    }, { validators: passwordMatchValidator });

  }

  get password() {
    return this.passwordForm.get('password');
  }

  get passwordComprobar() {
    return this.passwordForm.get('passwordComprobar');
  }
  savePassword() {
    if (this.passwordForm.dirty && this.passwordForm.valid) {
      this.router.navigate(['/home']);
    }
  }

  showpassword(inputId: string, iconId: string) {
    const password = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
      icon.setAttribute('class', 'far fa-eye');
    } else {
      password.setAttribute('type', 'password');
      icon.setAttribute('class', 'far fa-eye-slash');
    }
  }

  ngOnInit() {}
}
