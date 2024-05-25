import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrl: './firstcomp.component.css'
})
export class FirstcompComponent implements OnInit {

  public formGroup!: FormGroup;
  public formNotValid: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      localStorage.setItem("name", this.formGroup.get("name")!.value);
      localStorage.setItem("lastname", this.formGroup.get("lastname")!.value);
      localStorage.setItem("email", this.formGroup.get("email")!.value);
      console.log(localStorage.getItem("name"));
      this.formGroup.reset();
    }
  }

  checkIfValid() {
    if (this.formGroup.valid)
      this.formNotValid = false;
    else this.formNotValid = true;
  }
}
