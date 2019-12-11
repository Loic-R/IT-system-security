import { Component } from '@angular/core';
import { PortService } from './services/port.service';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  freePorts : string[] = [];
  range: string;

  constructor(public portService: PortService) {

  }

  public submit() {
    this.portService.getFreePorts(this.range).subscribe((res) => {
      res.freePorts.forEach((port) => {
        this.freePorts.push(port);
      });
    });
  }

}
