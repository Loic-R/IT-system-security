import { Component } from '@angular/core';
import { PortService } from './services/port.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  freePorts : String[];
  range: String;

  constructor(public portService: PortService) {

  }

  public submit() {
    this.portService.getFreePorts(this.range).subscribe( (res) => {
      this.freePorts = res;
    })
  }

}
