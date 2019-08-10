import React from 'react';
import { Link } from 'gatsby';
import ThemeToggler from '../components/theme-toggler';

interface Props {}

export default class Navbar extends React.Component {
  private scrollProgressBarRef;
  private navRef;

  constructor(props: Props) {
    super(props);
    this.scrollProgressBarRef = React.createRef();
    this.navRef = React.createRef();
  }

  componentDidMount() {
    this.scrollProgressBarRef.current.style.width = '0px';

    window.onscroll = () => {
      this.updateNavBarScrollingState();
      this.updateScrollProgressBar();
    };
  }

  render() {
    return (
      <nav ref={this.navRef} className="nav flex flex-col">
        <div className="container w-full py-sm">
          <div className="flex justify-between items-center py-xs">
            <span className="letter-spacing-wide font-size-2xl">
              <Link to="/" className="link pr-sm">
                <span className="font-family-secondary">TJ Hillard</span>
              </Link>
            </span>

            <div className="links">
              <Link
                to="/blog"
                className="font-family-primary ml-lg link font-weight-bold uppercase"
              >
                Blog
              </Link>
              <Link
                to="/blog"
                className="font-family-primary ml-lg link font-weight-bold uppercase"
              >
                Contact
              </Link>

              <span className="ml-lg">
                <ThemeToggler />
              </span>
            </div>
          </div>
        </div>
        <div
          ref={this.scrollProgressBarRef}
          className="scroll-progress-bar"
          style={{ height: '3px' }}
        ></div>
      </nav>
    );
  }

  private updateScrollProgressBar() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    const bar = this.scrollProgressBarRef.current;
    bar.style.width = scrolled + '%';
  }

  private updateNavBarScrollingState() {
    if (window.pageYOffset >= 25) {
      this.navRef.current.classList.add('scrolling');
    } else {
      this.navRef.current.classList.remove('scrolling');
    }
  }
}
