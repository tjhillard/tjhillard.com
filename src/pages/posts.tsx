import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../layouts/main';
import ListItemCard from '../components/application/list-item-card';
import { asVerbose } from '../services/dates.service';

interface Props {
  posts: {
    title: string;
    tags: string[];
    date: string;
    slug: string;
    thumbnailImageUrl: string;
  }[];
}

export class PostsPage extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <h1>posts</h1>
        <section>
          {this.props.posts.map(post => (
            <ListItemCard
              key={post.title}
              linkTo={`/posts/${post.slug}`}
              title={post.title}
              date={asVerbose(post.date)}
              tags={post.tags}
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
                tags
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
      <PostsPage
        posts={data.allMarkdownRemark.edges.map(edge => ({
          title: edge.node.frontmatter.title,
          tags: edge.node.frontmatter.tags,
          date: edge.node.frontmatter.date,
          thumbnailImageUrl: edge.node.frontmatter.thumbnailImageUrl,
          slug: edge.node.fields.slug,
        }))}
      />
    )}
  />
);
