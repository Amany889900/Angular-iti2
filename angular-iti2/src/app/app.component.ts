import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Component directive
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-iti2';

  sayHello():string{
    return `Hello, ${this.title}`
  }
}
