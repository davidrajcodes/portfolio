import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('rv') rvEls!: QueryList<ElementRef>;

  experiences: ExpItem[] = [
    {
      period: 'Apr 2025 – Present',
      title: 'Software Engineer',
      company: 'iHxCloud Pvt. Ltd',
      location: 'Bangalore, India',
      current: true,
      bullets: [
        'Architect and develop enterprise-grade Angular applications serving 50,000+ users, maintaining 99.9% production uptime.',
        'Implement reactive state management using RxJS BehaviorSubjects and Angular Signals, reducing unnecessary change detection cycles by 35%.',
        'Design modular, reusable Angular components following SOLID principles and Angular style guide best practices.',
        'Integrate and optimize REST API consumption from Spring Boot microservices using Angular HTTP Client and interceptors.',
        'Conduct code reviews and knowledge-sharing sessions on Angular standalone components, signals, and reactive forms.',
      ],
      tags: ['Angular 20', 'RxJS', 'Signals', 'Spring Boot', 'HTTP Interceptors', 'OnPush'],
    },
    {
      period: 'Mar 2023 – Mar 2025',
      title: 'Associate Software Engineer',
      company: 'iHxCloud Pvt. Ltd',
      location: 'Bangalore, India',
      current: false,
      bullets: [
        'Improved frontend load time and responsiveness by 40% through RxJS refactoring, lazy loading, and OnPush change detection.',
        'Built reusable Angular Material component library with 30+ components, reducing dev effort by 25%.',
        'Integrated REST APIs from Java Spring Boot (Hibernate/JPA, MySQL, Oracle) for policy management modules.',
        'Implemented Angular i18n with full RTL layout support for bilingual Arabic/English government interfaces.',
        'Promoted to Software Engineer within 2 years based on consistent delivery and stakeholder communication.',
      ],
      tags: ['Angular', 'RxJS', 'Angular Material', 'i18n', 'RTL', 'Lazy Loading', 'Hibernate'],
    },
  ];

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('on'); }),
      { threshold: 0.1 }
    );
    this.rvEls.forEach(el => obs.observe(el.nativeElement));
  }
}
