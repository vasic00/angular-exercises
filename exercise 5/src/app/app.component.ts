import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zadacic';

  value1: any = null;

  printValue(event: Event) {
    console.log((event.target! as HTMLInputElement).value);
    console.log(this.value1);
  }
}
