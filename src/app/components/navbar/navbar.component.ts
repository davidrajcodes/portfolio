import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  links = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggle() { this.menuOpen.update(v => !v); }

  scrollTo(id: string) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}
