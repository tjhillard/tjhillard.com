import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../layouts/main';
import ListCardItem from '../components/base/list-item-card';
import { asVerbose } from '../services/dates.service';

interface Props {
  posts: {
    title: string;
    date: string;
    slug: string;
    thumbnailImageUrl: string;
  }[];
}

export class BlogPage extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <h1>blog</h1>
        <section>
          {this.props.posts.map(post => (
            <ListCardItem
              key={post.title}
              linkTo={`/posts/${post.slug}`}
              title={post.title}
              description={asVerbose(post.date)}
              image={{
                src: post.thumbnailImageUrl,
                alt: '',
              }}
            />
          ))}
        </section>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { live: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                thumbnailImageUrl
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <BlogPage
        posts={data.allMarkdownRemark.edges.map(edge => ({
          title: edge.node.frontmatter.title,
          date: edge.node.frontmatter.date,
          thumbnailImageUrl: edge.node.frontmatter.thumbnailImageUrl,
          slug: edge.node.fields.slug,
        }))}
      />
    )}
  />
);
