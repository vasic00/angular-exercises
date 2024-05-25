import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {

  userId: number | null = null;
  data: any[] = [];
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {

  }

  fetch() {
    if (this.userId !== null) {
      this.httpClient.get("https://jsonplaceholder.typicode.com/posts?userId=" + this.userId).subscribe((data: any) => this.data = data);
    }
  }

  display(event: Event) {
    let element = event.target as HTMLElement;
    let nextElement = element.nextElementSibling as HTMLElement;
    if (nextElement.style.display === "block")
      nextElement.style.display = "none"
    else nextElement.style.display = "block";
  }

}
