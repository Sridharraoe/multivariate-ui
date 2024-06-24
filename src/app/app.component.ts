import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'multivariateflag-ui';
  flagValue!: string;
  public selectedEmail!: string;
  inputForm: FormGroup;
  constructor(private appService: AppServiceService, fb: FormBuilder) {
    this.inputForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendUser() {
    console.log(this.inputForm.value);
    this.selectedEmail = this.inputForm.get('email')?.value;
    this.appService
      .fetchMultivariateFlag(this.selectedEmail)
      .subscribe((data) => {
        console.log(data);
        this.flagValue = data;
      });
  }
}
