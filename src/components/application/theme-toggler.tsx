import React from 'react';

interface Props {}
interface State {
  currentTheme: string;
}

export default class ThemeToggler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTheme: 'light',
    };
  }

  componentDidMount() {
    this.setState({
      currentTheme: localStorage.getItem('theme')
        ? window.localStorage.getItem('theme')
        : 'light',
    });
    document.body.classList.add(localStorage.getItem('theme'));
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
    document.body.classList.remove(this.state.currentTheme);
    const newTheme = this.state.currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.add(newTheme);
    this.setState({
      currentTheme: this.state.currentTheme === 'dark' ? 'light' : 'dark',
    });
    window.localStorage.setItem('theme', newTheme);
  }
}
