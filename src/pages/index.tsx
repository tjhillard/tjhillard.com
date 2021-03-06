import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import projects from '../../data/projects';
import Layout from '../layouts/main';
import ListItemCard from '../components/application/list-item-card';
import { asVerbose } from '../services/dates.service';
import ExternalLink from '../components/base/external-link';

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
        <h2>projects</h2>

        <section>
          {projects.map(project => (
            <ListItemCard
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              image={{ src: project.image.src, alt: project.image.alt }}
            >
              <div className="mt-sm">
                <div className="mb-sm">{project.description}</div>
                <img src={project.badge} alt="Project Badge" />
              </div>
            </ListItemCard>
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
            <ListItemCard
              key={post.title}
              linkTo={`/posts/${post.slug}`}
              title={post.title}
              date={asVerbose(post.date)}
              image={{
                src: post.thumbnailImageUrl,
                alt: '',
              }}
            />
          ))}
        </section>

        <div className="mt-lg mb-3xl">
          <Link to="/posts" className="link">
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
