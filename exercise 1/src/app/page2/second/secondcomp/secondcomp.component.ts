import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrl: './secondcomp.component.css'
})
export class SecondcompComponent implements OnInit {

  public formGroup!: FormGroup;
  public elements: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: ["", Validators.required]
    });
  }

  submitForm() {
    console.log("WTF");
    if (this.formGroup.valid) {
      console.log(this.formGroup.get("id")!.value);
      this.httpClient.get("https://jsonplaceholder.typicode.com/posts?userId=" + this.formGroup.get("id")!.value).subscribe((data: any) => {
        data.forEach((element: any) => this.elements.push(element));
        this.formGroup.reset();
      })
    }
  }
}
