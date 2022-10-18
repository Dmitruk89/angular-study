import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navigateEvent = new EventEmitter<string>;

  onNavlinkClick(pageName: string){
    this.navigateEvent.emit(pageName);
  };

}
