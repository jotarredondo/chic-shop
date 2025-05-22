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

  defaultMapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369112.01062932675!2d-80.0019180199465!3d43.717041249744824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses!2scl!4v1747944867595!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
  selectedMapUrl: string = this.defaultMapUrl;

  locations = [
    {
      name: 'Chic Shop Downtown',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.855807263544!2d-79.38674652430045!3d43.65116825256298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cdba079fa1%3A0x9c4745a58ec6037e!2s123%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M5H%203M9%2C%20Canad%C3%A1!5e0!3m2!1ses!2scl!4v1747950799891!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      adress: '123 Queen St W, Toronto, ON',
      time: 'Mon–Sat: 10am–7pm'
    },
    {
      name: 'Chic Shop Yorkdale',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2991433501666!2d-79.45538362429635!3d43.725112147777594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3235ba3275ad%3A0x21f678375497bf4a!2s3401%20Dufferin%20St%2C%20North%20York%2C%20ON%20M6A%202T9%2C%20Canad%C3%A1!5e0!3m2!1ses!2scl!4v1747950975504!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      adress: '3401 Dufferin St, Toronto, ON',
      time: 'Mon–Sun: 10am–9pm'
    },
    {
      name: 'Chic Shop Eaton Centre',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6191916526373!2d-79.38359042430024!3d43.65609065224459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cb28724def%3A0x4be260d82f4d02b!2s220%20Yonge%20St%2C%20Toronto%2C%20ON%20M5B%202H1%2C%20Canad%C3%A1!5e0!3m2!1ses!2scl!4v1747951054377!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">',
      adress: '220 Yonge St, Toronto, ON',
      time: 'Mon–Sun: 10am–9pm'
    }
  ];

  setMap(url: string) {
    this.selectedMapUrl = url;
  }
}
