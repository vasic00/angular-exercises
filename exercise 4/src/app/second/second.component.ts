import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {


  data: any[] = [];
  id: string = '';

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  fetchData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.id).subscribe((data: any) => this.data = data);
  }
}
