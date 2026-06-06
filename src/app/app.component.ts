import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }     from './components/navbar/navbar.component';
import { HeroComponent }       from './components/hero/hero.component';
import { AboutComponent }      from './components/about/about.component';
import { SkillsComponent }     from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent }   from './components/projects/projects.component';
import { ContactComponent }    from './components/contact/contact.component';
import { FooterComponent }     from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent, HeroComponent, AboutComponent,
    SkillsComponent, ExperienceComponent, ProjectsComponent,
    ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`main { display:block; }`]
})
export class AppComponent {}
