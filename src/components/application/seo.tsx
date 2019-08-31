import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

interface Props {
  title: string;
  description: string;
  url: string;
  image: string;
}

export class SEO extends React.Component<Props> {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="image" content={this.props.image} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:url" content={this.props.url} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:image" content={this.props.image} />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_tjhillard" />
        <meta name="twitter:description" content={this.props.description} />
        <meta name="twitter:image" content={this.props.image} />

        <html lang="en" />
      </Helmet>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            url
            image
          }
        }
      }
    `}
    render={data => (
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        url={data.site.siteMetadata.url}
        image={data.site.siteMetadata.image}
      />
    )}
  />
);
