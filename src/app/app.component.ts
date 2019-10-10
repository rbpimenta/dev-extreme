import {Component} from '@angular/core';
import {Employee, Service} from './app.service';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
})
export class AppComponent {

  employee: Employee;
  positions: string[];
  rules: Object;
  private editorOptions: any;

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();

    this.editorOptions = {
      items: this.positions
    };

    this.rules = { 'X': /[02-9]/ };
  }

  alert() {
    window.alert('teste');
  }
}
