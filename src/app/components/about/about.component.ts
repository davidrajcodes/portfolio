import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('rv') rvEls!: QueryList<ElementRef>;

  highlights = [
    { icon: '🌍', title: 'Qatar Deployment', desc: '7-month onsite engagement as primary Angular lead for national MOPH platform' },
    { icon: '⚡', title: '40% Perf Gain', desc: 'RxJS refactoring, lazy loading & OnPush change detection strategy' },
    { icon: '🏗️', title: 'Component Library', desc: '30+ reusable Angular Material components reducing dev overhead by 25%' },
    { icon: '🌐', title: 'Bilingual UI', desc: 'Angular i18n with full RTL layout for Arabic/English government platform' },
  ];

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('on'); }),
      { threshold: 0.15 }
    );
    this.rvEls.forEach(el => obs.observe(el.nativeElement));
  }
}
