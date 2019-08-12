import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import projects from '../../data/projects';
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
          I'm a Software Engineer at{' '}
          <a href="#" className="link gradient">
            Snap! Raise
          </a>{' '}
          in Seattle, Washington. I focus on modern JavaScript, UI development,
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
              description={asVerbose(post.date)}
              image={{
                src: post.thumbnailImageUrl,
                alt: '',
              }}
            />
          ))}
        </section>

        <div className="mt-lg mb-3xl">
          <Link to="/blog" className="link">
            view more
          </Link>
        </div>
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
      <IndexPage
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
