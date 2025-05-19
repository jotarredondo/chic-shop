import { Component } from '@angular/core';
import {SlideService} from '../../services/slide.service';
import {Slide} from '../../shared/models/slide.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides: Slide[] = [];
  currentIndex = 0;
  intervalId: any;

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    this.slides = this.slideService.getSlides();
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
