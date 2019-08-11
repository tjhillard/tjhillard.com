import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import projects from '../../data/projects';
import Layout from '../layouts/main';
import ListCardItem from '../components/list-item-card';

interface Props {
  posts: { title: string; date: string; thumbnail: string; slug: string }[];
}

export class IndexPage extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <div className="font-family-secondary font-size-4xl pt-lg">
          hello! 👋
        </div>
        <p
          className="font-weight-thin font-size-xl"
          style={{ lineHeight: '2.5rem' }}
        >
          I'm a Full Stack Software Engineer at{' '}
          <a href="#" className="link gradient">
            Snap! Raise
          </a>{' '}
          in Seattle, Washington. I enjoy modern JavaScript, UI development,
          design systems, software architecture, and DX tooling.
        </p>

        <h2 className="mt-3xl">projects</h2>

        <section>
          {projects.map(project => (
            <ListCardItem
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              image={{ src: project.image.src, alt: project.image.alt }}
            >
              <div className="mt-sm">
                <img src={project.badge} alt="Project Badge" />
              </div>
            </ListCardItem>
          ))}
        </section>

        <div className="mt-lg">
          <a href="https://github.com/tjhillard" className="link">
            view more
          </a>
        </div>

        <h2 className="mt-3xl">recent posts</h2>

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

        <div className="mt-lg">
          <Link to="/blog" className="link">
            view more
          </Link>
        </div>

        <div style={{ height: '2000px' }}></div>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 3
          sort: { fields: frontmatter___date, order: ASC }
        ) {
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
      <IndexPage
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
