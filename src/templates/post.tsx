import React from 'react';
import { graphql } from 'gatsby';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import Img, { FluidObject } from 'gatsby-image';
import Layout from '../layouts/main';
import { asVerbose } from '../services/dates.service';
import Helmet from 'react-helmet';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        headerImage: string;
        description: string;
      };
      fields: { slug: string };
      html: string;
    };
    file: {
      childImageSharp: {
        fluid: FluidObject;
        src: string;
      };
    };
    site: {
      siteMetadata: {
        author: string;
        title: string;
        description: string;
        url: string;
      };
    };
  };
}

export default class PostTemplate extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>{this.props.data.markdownRemark.frontmatter.title}</title>
          <meta
            name="description"
            content={this.props.data.markdownRemark.frontmatter.description}
          />
          <meta
            name="image"
            content={this.props.data.file.childImageSharp.fluid.src}
          />
          <meta
            property="og:title"
            content={this.props.data.markdownRemark.frontmatter.title}
          />
          <meta
            property="og:url"
            content={this.props.data.site.siteMetadata.url}
          />
          <meta
            property="og:description"
            content={this.props.data.markdownRemark.frontmatter.description}
          />
          <meta
            property="og:image"
            content={this.props.data.file.childImageSharp.fluid.src}
          />
          <meta
            name="twitter:title"
            content={this.props.data.markdownRemark.frontmatter.title}
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@_tjhillard" />
          <meta
            name="twitter:description"
            content={this.props.data.markdownRemark.frontmatter.description}
          />
          <meta
            name="twitter:image"
            content={this.props.data.file.childImageSharp.fluid.src}
          />
        </Helmet>

        <h1 style={{ margin: '0' }}>
          {this.props.data.markdownRemark.frontmatter.title}
        </h1>
        <div className="font-weight-bold font-size-sm mb-lg flex justify-between">
          <span>
            📅{asVerbose(this.props.data.markdownRemark.frontmatter.date)}
          </span>
          <CommentCount config={this.disqusConfig} />
        </div>

        <Img
          fluid={this.props.data.file.childImageSharp.fluid}
          className="rounded-sm"
        />

        <div className="muted mt-sm text-center font-size-xs font-family-secondary">
          Photo credit: {this.headerImageCredit.artist} /{' '}
          {this.headerImageCredit.source}
        </div>

        <article
          className="post-body mb-3xl"
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        ></article>

        <Disqus config={this.disqusConfig} />
      </Layout>
    );
  }

  private get headerImageCredit() {
    const creditFile = require('../../images/credit');
    const { artist, source } = creditFile[
      this.props.data.markdownRemark.frontmatter.headerImage.split('.')[0]
    ];
    return { artist, source };
  }

  private get disqusConfig() {
    return {
      identifier: this.props.data.markdownRemark.fields.slug,
      title: this.props.data.markdownRemark.frontmatter.title,
    };
  }
}

export const query = graphql`
  query($slug: String!, $headerImagePath: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
        headerImage
      }
      fields {
        slug
      }
      html
    }
    file(absolutePath: { eq: $headerImagePath }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 70) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
    site {
      siteMetadata {
        url
        description
        author
        title
      }
    }
  }
`;
