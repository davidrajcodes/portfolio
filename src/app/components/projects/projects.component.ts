import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('rv') rvEls!: QueryList<ElementRef>;

  projects = [
    {
      eyebrow: '★ Featured Project · Qatar',
      title: 'Qatar Health Insurance System (QHIS)',
      description: 'National-scale healthcare insurance platform serving 50,000+ users. Led 7-month onsite deployment in Qatar as primary Angular frontend developer, collaborating directly with MOPH government stakeholders. Built a fully bilingual (Arabic/English) UI with RTL layout using Angular i18n. Implemented complex reactive workflows using RxJS operators and Angular Signals for real-time policy and claim status updates.',
      tags: ['Angular i18n', 'RTL Layout', 'RxJS', 'Signals', 'Spring Boot', 'Oracle DB', 'HTTP Client'],
      metrics: [
        { val:'50K+', label:'End Users' },
        { val:'7mo',  label:'Qatar Onsite' },
        { val:'2',    label:'Languages' },
      ],
      align: 'right',
      accent: 'var(--gold)',
      mockup: 'qhis',
    },
    {
      eyebrow: '⬡ Featured Project · Healthcare',
      title: 'QuadraCyte — Healthcare Management System',
      description: 'Migrated a legacy jQuery-based portal to modern Angular using standalone components, lazy-loaded feature modules, and a signal-based state store. Engineered 30+ reusable Angular Material components. Optimized API call patterns using RxJS caching strategies (shareReplay, distinctUntilChanged), reducing redundant network requests by 40%.',
      tags: ['Standalone Components', 'Lazy Loading', 'Signal Store', 'Angular Material', 'RxJS Caching', 'Spring Boot'],
      metrics: [
        { val:'30+', label:'Components' },
        { val:'40%', label:'Less API Calls' },
        { val:'Feb 24', label:'Ongoing' },
      ],
      align: 'left',
      accent: 'var(--cyan)',
      mockup: 'quadra',
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
