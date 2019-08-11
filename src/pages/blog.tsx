import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../layouts/main';
import ListCardItem from '../components/list-item-card';

interface Props {
  posts: { title: string; date: string; slug: string; thumbnail: string }[];
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
              description={post.date}
              image={{
                src: post.thumbnail,
                alt: `${post.title} thumbnail`,
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
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                thumbnail
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
          thumbnail: edge.node.frontmatter.thumbnail,
          slug: edge.node.fields.slug,
        }))}
      />
    )}
  />
);
