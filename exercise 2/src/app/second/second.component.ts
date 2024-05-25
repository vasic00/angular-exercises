import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {

  items: any[] = [];
  restaurants: any[] = []
  selectedItem: any = null;
  chosenItems: any[] = [];
  filteredRestaurants: any[] = [];
  grades: Map<string, number[]> = new Map(); //GRADES TODO

  ngOnInit(): void {
    console.log(localStorage.getItem("items"));
    if (localStorage.getItem("items") !== null) {
      this.items = JSON.parse(localStorage.getItem("items")!);
      // this.selectedItem = this.items[0];
    }
    if (localStorage.getItem("restaurants") !== null)
      this.restaurants = JSON.parse(localStorage.getItem("restaurants")!);
  }

  selectionChange() {
    if (this.selectedItem !== null) {
      this.selectedItem = this.selectedItem as any;
      console.log(this.selectedItem.itemName);
      this.chosenItems.push(this.selectedItem);
    }
  }

  showRestaurants() {
    this.filteredRestaurants = [];
    this.restaurants.forEach((rest: any) => {
      let filteredItems = rest.items.filter((item: any) => {
        let flag: boolean = false;
        this.chosenItems.forEach((chosenItem: any) => {
          if (chosenItem.itemName === item.itemName)
            flag = true;
        })
        return flag;
      });
      if (filteredItems.length > 0)
        this.filteredRestaurants.push(rest);
    })
  }
}
