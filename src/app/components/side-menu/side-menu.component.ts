import {Component, HostBinding, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    MatIcon,
    RouterLink
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

  onGithub(){
    window.open('https://github.com/jotarredondo');
  }

  onLinkedIn() {
    window.open('https://www.linkedin.com/in/arredondojose/');
  }
}
