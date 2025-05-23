import { Injectable } from '@angular/core';
import {Slide} from '../shared/models/slide.model';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  getSlides(): Slide[] {
    return [
      {
        image: 'assets/img/SLIDE_HOME/2.jpg',
        title: 'Step into Style',
        subtitle: 'Discover shoes that speak confidence in every step.'
      },
      {
        image: 'assets/img/SLIDE_HOME/3.jpg',
        title: 'Carry Chic',
        subtitle: 'Handbags and backpacks made to elevate your everyday look.'
      },
      {
        image: 'assets/img/SLIDE_HOME/4.jpg',
        title: 'See the Sun Differently',
        subtitle: 'Minimal designs with maximum attitude.'
      }
    ];
  }
}
