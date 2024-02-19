import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserComponent } from './components/user/user.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular17-tutorial';
  userOcuppation: string = "Developer";

  receiveEmision($event: any): void {
    console.log($event)
    throw new Error('Method not implemented.');
    }

}
