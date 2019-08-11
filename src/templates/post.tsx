import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/main';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: { title: string; date: string };
      fields: { slug: string };
      html: string;
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
        <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
        <p className="font-weight-bold font-size-sm">
          📅{this.props.data.markdownRemark.frontmatter.date}
        </p>

        <article
          className="post-body mb-3xl"
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        ></article>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      html
    }
  }
`;
