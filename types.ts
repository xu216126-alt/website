
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  details: string[];
  honors: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Research {
  id: string;
  title: string;
  publication?: string;
  link: string;
  type: 'ACM' | 'IEEE' | 'Other';
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  avatar: string; // Kept for small thumbnails (like contact card)
  cartoon: string; // Kept for backward compatibility
  gallery: string[]; // NEW: Array of images for the hero section
  resume: string; // NEW: Path to the resume file
  languages: string[];
  hobbies: string[];
  contact: ContactInfo;
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  experience: Experience[];
  research: Research[];
  skills: SkillCategory[];
  projectWall: string[]; // NEW: Array of images for the scrolling wall
}
