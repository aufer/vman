import { Component } from '@angular/core';
import { Member } from '@vereinsmanager/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  member: Member
}
