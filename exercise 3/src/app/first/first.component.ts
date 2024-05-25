import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {

  formGroup!: FormGroup;
  enableSubmit: boolean = false;
  students: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ime: ["", Validators.required],
      prezime: ["", Validators.required],
      brojIndeksa: ["", Validators.required],
      godinaRodjenja: ["", [Validators.required, Validators.min]],
      studijskiProgram: ["", Validators.required],
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      console.log("SUBMITTING FORM");
      let imeVal = this.formGroup.get("ime")?.value;
      let prezimeVal = this.formGroup.get("prezime")?.value;

      let brojIndeksaVal = this.formGroup.get("brojIndeksa")?.value;

      let godinaRodjenjaVal = this.formGroup.get("godinaRodjenja")?.value;

      let studijskiProgramVal = this.formGroup.get("studijskiProgram")?.value;
      this.students.push({ ime: imeVal, prezime: prezimeVal, brojIndeksa: brojIndeksaVal, godinaRodjenja: godinaRodjenjaVal, studijskiProgram: studijskiProgramVal });
      this.formGroup.reset();
      this.enableSubmit = false;
    }
  }

  checkIfValid() {
    if (this.formGroup.valid) {
      this.enableSubmit = true;
      console.log("FORM VALID");
    }
    else console.log("FORM NOT VALID");
  }
}
