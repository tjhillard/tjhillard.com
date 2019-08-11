import React from 'react';
import ThemeService from '../services/theme-service';

interface Props {}
interface State {
  currentTheme: string;
}

export default class ThemeToggler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTheme: localStorage.getItem('theme'),
    };
  }

  render() {
    return (
      <span className="cursor-pointer user-select-none">
        <span onClick={() => this.toggleTheme()}>
          <>{this.emoji}</>
        </span>
      </span>
    );
  }

  private get emoji() {
    return this.state.currentTheme === 'light' ? (
      <span> 🌙 </span>
    ) : (
      <span> ☀️ </span>
    );
  }

  private toggleTheme() {
    ThemeService.toggleTheme();
    this.setState({
      currentTheme: document.body.classList.contains('dark') ? 'dark' : 'light',
    });
  }
}
