import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Dimon';
  pageName = 'recipes';

  navigate(event: string){
    this.pageName = event;
  }
}
