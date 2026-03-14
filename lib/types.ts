// Type definitions for the portfolio

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  position: string;
  description: string;
  year: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface AcademicRecord {
  semester: string;
  sgpa: number;
}
