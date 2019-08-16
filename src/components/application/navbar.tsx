import React, { RefObject } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import ThemeToggler from './theme-toggler';

interface Props {
  author: string;
}

export class Navbar extends React.Component<Props> {
  private scrollProgressBarRef: RefObject<HTMLDivElement>;
  private navRef: RefObject<HTMLDivElement>;

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
            <span className="letter-spacing-wide">
              <Link to="/" className="link no-underline mr-sm">
                <span className="font-family-secondary font-size-lg md:font-size-2xl">
                  {this.props.author}
                </span>
              </Link>
            </span>

            <div className="links">
              <Link
                to="/me"
                className="font-family-primary ml-lg link no-underline font-weight-bold"
              >
                <span>me</span>
              </Link>

              <Link
                to="/blog"
                className="font-family-primary ml-lg link no-underline font-weight-bold"
              >
                <span>blog</span>
              </Link>

              <span className="mx-md pr-sm">
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
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
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

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => <Navbar author={data.site.siteMetadata.author} />}
  />
);
