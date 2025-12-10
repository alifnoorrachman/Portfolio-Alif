export enum AppState {
  LOADING = 'LOADING',
  START_SCREEN = 'START_SCREEN',
  MAIN_MENU = 'MAIN_MENU',
}

export enum MenuItem {
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
}