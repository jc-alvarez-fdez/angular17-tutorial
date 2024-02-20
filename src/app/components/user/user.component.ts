import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OperatingSystem } from '../../interfaces/operating-systems';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  @Input() occupation: string ="";
  @Output() greet: EventEmitter<string>  = new EventEmitter<string>();

  username: string = "JC";

  doesUserExists: boolean = true;
  isEditable: boolean = true;

  operatingSystems: OperatingSystem[] = [
    {
      id: 'win',
      name: 'Windows'
    },
    {
      id: 'osx',
      name: 'MacOs'
    },
    {
      id: 'linux',
      name: 'Linux'
    }
  ];

onMouseOver(osName: string): void {
  console.log(osName);
}

emitToParent(): void {
  this.greet.emit("Hi! I'm your child");
}


}
