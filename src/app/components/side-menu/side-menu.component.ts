import {Component, HostBinding, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [
    MatIcon,
    RouterLink,
    NgIf
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  developerMenuOpen = false;

  @Input() isOpen = false;
  @Input() toggleMenu!: () => void;

  @HostBinding('class.open')
  get opened() {
    return this.isOpen;
  }

  toggleDeveloperMenu() {
    this.developerMenuOpen = !this.developerMenuOpen;
  }

  onGithub(){
    window.open('https://github.com/jotarredondo');
  }

  onLinkedIn() {
    window.open('https://www.linkedin.com/in/arredondojose/');
  }
}
