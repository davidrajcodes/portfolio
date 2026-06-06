export interface NavLink { label: string; href: string; }

export interface Skill {
  name: string;
  icon: string;   // devicon class or emoji fallback
  color: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface ExpItem {
  period: string;
  title: string;
  company: string;
  location: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export interface Project {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  metrics: { val: string; label: string }[];
  align: 'left' | 'right';
  accentColor: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}
