import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit {


  user: any = null;
  selectedOption: string = "+";
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  result: number | null = null;

  constructor() {

  }

  ngOnInit(): void {
    if (localStorage.getItem("user") !== null)
      this.user = JSON.parse(localStorage.getItem("user")!);
  }

  calculate() {
    if (this.firstNumber !== null && this.secondNumber !== null) {
      if (this.selectedOption === "+")
        this.result = this.firstNumber + this.secondNumber;
      else if (this.selectedOption === "-")
        this.result = this.firstNumber - this.secondNumber;
      else if (this.selectedOption === "x")
        this.result = this.firstNumber * this.secondNumber;
      else if (this.selectedOption === "/")
        this.result = this.firstNumber / this.secondNumber;
    }
  }
}
