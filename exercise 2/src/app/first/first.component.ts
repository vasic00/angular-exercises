import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})

export class FirstComponent implements OnInit {


  items: any[] = [];
  restr: any[] = [];
  formGroup!: FormGroup;
  secondaryFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
    });
    this.secondaryFormGroup = this.formBuilder.group({
      itemName: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", [Validators.required, Validators.min]]
    })
    if (localStorage.getItem("restaurants") !== null)
      this.restr = JSON.parse(localStorage.getItem("restaurants")!);
  }

  submitSecondaryForm() {
    if (this.secondaryFormGroup.valid) {
      let itemNm = this.secondaryFormGroup.get("itemName")?.value;
      let desc = this.secondaryFormGroup.get("description")?.value;
      let pr = this.secondaryFormGroup.get("price")?.value;
      this.items.push({ itemName: itemNm, description: desc, price: pr });
      let storedItems = [];
      if (localStorage.getItem("items") !== null) {
        storedItems = JSON.parse(localStorage.getItem("items")!);
        storedItems.push({ itemName: itemNm, description: desc, price: pr });
        localStorage.setItem("items", JSON.stringify(storedItems));
      }
      else {
        storedItems.push({ itemName: itemNm, description: desc, price: pr });
        localStorage.setItem("items", JSON.stringify(storedItems));
      }
      this.secondaryFormGroup.reset();
    }
  }

  submitMainForm() {
    if (this.formGroup.valid && this.items.length > 0) {
      let nm = this.formGroup.get("name")?.value;
      let addr = this.formGroup.get("address")?.value;
      let restaurants = [];
      if (localStorage.getItem("restaurants") !== null) {
        restaurants = JSON.parse(localStorage.getItem("restaurants")!);
      }
      restaurants.push({ name: nm, address: addr, items: this.items });
      this.restr.push({ name: nm, address: addr, items: this.items });
      localStorage.setItem("restaurants", JSON.stringify(restaurants));
      this.formGroup.reset();
      this.items = [];
    }
  }

  deleteRestaur(restaur: any) {
    this.restr = this.restr.filter((rest: any) => rest.name !== restaur.name || rest.address !== restaur.address);
    let restaurants = JSON.parse(localStorage.getItem("restaurants")!);
    restaurants = restaurants.filter((rest: any) => rest.name !== restaur.name || rest.address !== restaur.address);
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }
}
