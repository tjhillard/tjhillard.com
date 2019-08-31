import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ExternalLink from '../base/external-link';

interface Props {
  author: string;
}

export class Footer extends React.Component<Props> {
  render() {
    return (
      <footer className="footer font-size-sm">
        <div className="container flex justify-between">
          <div>© {this.props.author} 2019</div>
          <div>
            <ExternalLink
              href="https://github.com/tjhillard"
              className="link no-underline mx-sm"
            >
              github
            </ExternalLink>
          </div>
        </div>
      </footer>
    );
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
    render={data => <Footer author={data.site.siteMetadata.author} />}
  />
);
