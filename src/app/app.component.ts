import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imageWidth = 50;
  imageMargin = 2;
  imageSource = 'http://angular.io/assets/images/logos/angular/angular.svg'
}
