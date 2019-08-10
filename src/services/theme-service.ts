const DEFAULT_THEME = 'light';

class ThemeService {
  constructor() {
    if (!this.getFromStorage) {
      this.setInStorage(DEFAULT_THEME);
    }
    this.theme = this.getFromStorage();
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }

  get theme() {
    return this.getFromStorage();
  }

  set theme(theme: string) {
    document.body.classList.remove(this.theme);
    document.body.classList.add(theme);
    this.setInStorage(theme);
  }

  setInStorage(theme) {
    localStorage.setItem('theme', theme);
  }

  getFromStorage() {
    return localStorage.getItem('theme');
  }
}

export default new ThemeService();
