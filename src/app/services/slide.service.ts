import { Injectable } from '@angular/core';
import {Slide} from '../shared/models/slide.model';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  getSlides(): Slide[] {
    return [
      {
        image: 'assets/img/SLIDE_HOME/1.jpg',
        title: 'Primavera Chic',
        subtitle: 'Descubre lo nuevo en accesorios vibrantes'
      },
      {
        image: 'assets/img/SLIDE_HOME/2.jpg',
        title: 'Elegancia Atemporal',
        subtitle: 'Diseños que hablan por sí solos'
      },
      {
        image: 'assets/img/SLIDE_HOME/3.jpg',
        title: 'Estilo Urbano',
        subtitle: 'Looks perfectos para tu día a día'
      },
      {
        image: 'assets/img/SLIDE_HOME/4.jpg',
        title: 'Lujo Minimalista',
        subtitle: 'Menos es más, siempre'
      }
    ];
  }
}
