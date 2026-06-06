import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = signal('');
  showCursor = signal(true);

  private words = ['Angular Developer', 'RxJS Expert', 'Frontend Developer'];
  private wIdx = 0;
  private cIdx = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private cursorTimer: ReturnType<typeof setInterval> | null = null;

  stats = [
    { val: '3+',   label: 'Years Experience' },
    { val: '50K+', label: 'Users Served' },
    { val: '40%',  label: 'Perf Gained' },
    { val: '30+',  label: 'Components Built' },
  ];

  ngOnInit() {
    this.type();
    this.cursorTimer = setInterval(() => this.showCursor.update(v => !v), 530);
  }

  private type() {
    const word = this.words[this.wIdx];
    if (!this.deleting) {
      this.typedText.set(word.slice(0, ++this.cIdx));
      if (this.cIdx === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.typedText.set(word.slice(0, --this.cIdx));
      if (this.cIdx === 0) {
        this.deleting = false;
        this.wIdx = (this.wIdx + 1) % this.words.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 55 : 90);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }
}
