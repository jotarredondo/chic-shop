import {Component, HostBinding, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-side-menu',
  imports: [
    MatIcon
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Input() isOpen = false;
  @Input() toggleMenu!: () => void;

  @HostBinding('class.open')
  get opened() {
    return this.isOpen;
  }
}
