import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container-xl d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div class="footer-logo mono">
          <!-- <span style="color:var(--purple-lit)">&lt;</span>IDR<span style="color:var(--purple-lit)">/&gt;</span> -->
        </div>
        <p class="footer-copy mono">Built with <span style="color:var(--purple-lit)">Angular 20</span> + Bootstrap · © {{ year }}</p>
        <p class="footer-loc mono">Bangalore, India</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 24px 0;
      border-top: 1px solid var(--border);
      background: var(--bg-deep);
    }
    .footer-logo { font-size:16px;font-weight:700;color:var(--text); }
    .footer-copy, .footer-loc { font-size:11px;color:var(--muted);margin:0;letter-spacing:.5px; }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
