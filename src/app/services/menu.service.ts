import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuState = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuState.asObservable();

  toggleMenu() {
    this.menuState.next(!this.menuState.value);
  }

  setMenu(state: boolean) {
    this.menuState.next(state);
  }
}
