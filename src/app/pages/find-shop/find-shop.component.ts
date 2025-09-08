import { Component } from '@angular/core';
import {SafeUrlPipe} from '../../shared/pipes/safe-url.pipe';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-find-shop',
  imports: [
    SafeUrlPipe,
    NgForOf
  ],
  templateUrl: './find-shop.component.html',
  styleUrl: './find-shop.component.scss'
})
export class FindShopComponent {

  defaultMapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.855807263544!2d-79.38674652430045!3d43.65116825256298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cdba079fa1%3A0x9c4745a58ec6037e!2s123%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5H%203M9%2C%20Canad%C3%A1!5e0!3m2!1ses!2scl!4v1747950799891!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
  selectedMapUrl: string = this.defaultMapUrl;

  locations = [
    {
      name: 'Chic Shop Downtown Toronto',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.855807263544!2d-79.38674652430045!3d43.65116825256298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cdba079fa1%3A0x9c4745a58ec6037e!2s123%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5H%203M9%2C%20Canad%C3%A1!5e0!3m2!1ses!2scl!4v1747950799891!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      adress: '123 Queen St W, Toronto, ON',
      time: 'Mon–Sat: 10am–7pm'
    },
    {
      name: 'Chic Shop Madrid',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.688655546152!2d-3.712186524472318!3d40.41574755569999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228791b2bec7d%3A0x2ddbc9a33518291f!2sC.%20Mayor%2C%20Centro%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2scl!4v1757339680323!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      adress: 'C. Mayor, Centro, 28013 Madrid, España',
      time: 'Mon–Sun: 10am–9pm'
    },
    {
      name: 'Chic Shop Santiago de Chile',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3330.2001176726894!2d-70.60884232453618!3d-33.41802669585206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1small%20costanera%20center!5e0!3m2!1ses!2scl!4v1748107197998!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      adress: '2425 Av. Andrés Bello, Santiago, RM',
      time: 'Mon–Sun: 10am–9pm'
    }
  ];

  setMap(url: string) {
    this.selectedMapUrl = url;
  }
}
