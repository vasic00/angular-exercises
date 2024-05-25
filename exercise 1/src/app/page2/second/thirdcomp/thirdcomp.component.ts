import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-thirdcomp',
  templateUrl: './thirdcomp.component.html',
  styleUrl: './thirdcomp.component.css'
})
export class ThirdcompComponent implements OnInit {

  selectedOperator: string = "+";
  leftNumber: number = 0;
  rightNumber: number = 0;
  result: number = 0;
  name: string = "";
  lastname: string = "";
  email: string = "";
  constructor() {

  }

  ngOnInit(): void {
    let tempName = localStorage.getItem("name");
    let tempLastname = localStorage.getItem("lastname");
    let tempEmail = localStorage.getItem("email");
    if (tempName !== null)
      this.name = tempName;
    if (tempLastname !== null)
      this.lastname = tempLastname;
    if (tempEmail !== null)
      this.email = tempEmail;
  }

  calculate() {
    if (this.selectedOperator === "*")
      this.result = this.leftNumber * this.rightNumber;
    else if (this.selectedOperator === "+")
      this.result = this.leftNumber + this.rightNumber;
    else if (this.selectedOperator === "-")
      this.result = this.leftNumber - this.rightNumber;
    else if (this.selectedOperator === "/" && this.rightNumber !== 0)
      this.result = this.leftNumber / this.rightNumber;
  }
}
