import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('rv') rvEls!: QueryList<ElementRef>;

  links = [
    { icon: 'devicon-github-original',   label: 'GitHub',    href: 'https://github.com/davidrajcodes?tab=repositories',                              color: '#ede9fe' },
    { icon: 'devicon-linkedin-plain',     label: 'LinkedIn',  href: 'https://linkedin.com/in/david-raj', color:'#0a66c2' },
    { icon: '',                           label: 'Email',     href: 'mailto:davidraj.i@outlook.com',  color: '#c084fc', isEmail: true },
  ];

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('on'); }),
      { threshold: 0.2 }
    );
    this.rvEls.forEach(el => obs.observe(el.nativeElement));
  }
}
