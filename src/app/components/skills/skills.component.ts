import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechIcon {
  name: string;
  icon: string;   // devicon class
  color: string;
  category: 'frontend' | 'state' | 'backend' | 'tools';
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('rv') rvEls!: QueryList<ElementRef>;

  categories = [
    {
      label: 'Frontend',
      color: 'var(--purple-lit)',
      techs: [
        { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#dd0031' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178c6' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#f7df1e' },
        { name: 'SCSS', icon: 'devicon-sass-original', color: '#cc6699' },
        { name: 'HTML5', icon: 'devicon-html5-plain', color: '#e34f26' },
        { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572b6' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: '#7952b3' },
        { name: 'Material UI', icon: 'devicon-materialui-plain', color: '#007fff' },
      ]
    },
    {
      label: 'Testing',
      color: 'var(--green)',
      techs: [
        { name: 'Vitest', icon: 'devicon-vitest-plain', color: '#6e9f18' },
        { name: 'Jasmine', icon: 'devicon-jasmine-plain', color: '#8a4182' },
        { name: 'Karma', icon: 'devicon-karma-plain', color: '#56c5a4' },
        { name: 'Unit Testing', icon: 'devicon-jest-plain', color: '#c21325' },
        { name: 'Component Testing', icon: 'devicon-angularjs-plain', color: '#dd0031' },
        { name: 'Service Testing', icon: 'devicon-typescript-plain', color: '#3178c6' },
      ]
    },
    {
      label: 'State & Reactivity',
      color: 'var(--cyan)',
      techs: [
        { name: 'RxJS', icon: 'devicon-javascript-plain', color: '#e23fbc' },
        { name: 'Signals', icon: 'devicon-angularjs-plain', color: '#dd0031' },
        { name: 'BehaviorSubject', icon: 'devicon-javascript-plain', color: '#c084fc' },
        { name: 'HTTP Client', icon: 'devicon-nodejs-plain', color: '#22d3ee' },
      ]
    },
    {
      label: 'Backend (Working Knowledge)',
      color: 'var(--gold)',
      techs: [
        { name: 'Java', icon: 'devicon-java-plain', color: '#5382a1' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6db33f' },
        { name: 'Hibernate', icon: 'devicon-hibernate-plain', color: '#bcae79' },
        { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479a1' },
        { name: 'Oracle DB', icon: 'devicon-oracle-original', color: '#f80000' },
      ]
    },
    {
      label: 'Tools & Workflow',
      color: 'var(--pink)',
      techs: [
        { name: 'Git', icon: 'devicon-git-plain', color: '#f05032' },
        { name: 'GitHub', icon: 'devicon-github-original', color: '#ede9fe' },
        { name: 'Postman', icon: 'devicon-postman-plain', color: '#ff6c37' },
        { name: 'Jira', icon: 'devicon-jira-plain', color: '#0052cc' },
        { name: 'Bitbucket', icon: 'devicon-bitbucket-original', color: '#0052cc' },
        { name: 'VS Code', icon: 'devicon-vscode-plain', color: '#007acc' },
      ]
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
