import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {

  formGroup!: FormGroup;
  submitDisabled: boolean = true;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ime: ["", Validators.required],
      prezime: ["", Validators.required],
      email: ["", Validators.email]
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      localStorage.setItem("user", JSON.stringify({ ime: this.formGroup.get('ime')!.value, prezime: this.formGroup.get('prezime')!.value, email: this.formGroup.get('email')!.value }));
      this.formGroup.reset();
    }
  }

  checkIfValid() {
    if (this.formGroup.valid) {
      this.submitDisabled = false;
    }
    else this.submitDisabled = true;
  }
}
