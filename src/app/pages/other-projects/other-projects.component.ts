import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-other-projects',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './other-projects.component.html',
  styleUrl: './other-projects.component.scss'
})
export class OtherProjectsComponent {

  projects = [
    {
      title: 'Pago Express',
      year: 'Current (2021–2024)',
      repo: null,
      description: 'Enterprise payment platform developed and maintained as part of an internal banking system. This project includes integration with payment gateways and banking APIs.',
      image: 'assets/img/PROJECTS/1.jpg',
      technologies: ['Angular', 'Java', 'Quarkus', 'Spring Boot', 'REST API', 'SQL Server', 'Sybase', 'CI/CD']
    },
    {
      title: 'Sucursal Virtual',
      year: 'Current (2021–2024)',
      repo: null,
      description: 'Corporate banking web app built and maintained for internal operations. Features include secure client access, multi-channel integration, and transactional services.',
      image: 'assets/img/PROJECTS/2.jpg',
      technologies: ['Angular', 'Java', 'Quarkus', 'Spring Boot', 'REST API', 'SQL Server', 'Sybase', 'CI/CD']
    },
    {
      title: 'Swift iOS App',
      year: 'Dec - 2024',
      repo: 'https://github.com/jotarredondo/Biblioteca_de_Datos',
      description: 'Swift app that fetches and displays superhero data from a public API. Built during a bootcamp using SwiftUI.',
      image: 'assets/img/PROJECTS/3.jpeg',
      technologies: ['Swift', 'Xcode', 'iOS']
    },
    {
      title: 'Fútbol Chileno APP',
      year: 'Oct - 2020',
      repo: 'https://github.com/jotarredondo/Futbol-Chileno-API',
      description: 'RESTful web app to manage Chilean football teams, stadiums, and tournaments.',
      image: 'assets/img/PROJECTS/4.jpeg',
      technologies: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Thymeleaf', 'Bootstrap']
    },
    {
      title: 'Personal Portfolio',
      year: 'Oct - 2020',
      repo: 'https://github.com/jotarredondo/Portafolio',
      description: 'Static portfolio showcasing projects, skills, and contact information using vanilla web technologies.',
      image: 'assets/img/PROJECTS/5.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
    }
  ];


}
