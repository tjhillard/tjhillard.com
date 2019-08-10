import React from 'react';
import projects from '../../data/projects';
import Layout from '../layouts/main';
import ListCardItem from '../components/list-item-card';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="font-family-secondary font-size-4xl pt-lg">
          Hello! 👋
        </div>
        <p
          className="font-weight-thin font-size-xl"
          style={{ lineHeight: '2.5rem' }}
        >
          I'm a Software Engineer at{' '}
          <a href="#" className="link gradient">
            Snap! Raise
          </a>{' '}
          in Seattle, Washington. I focus on frontend development, modern
          JavaScript, and tooling.
        </p>

        <h2 className="mt-3xl letter-spacing-wide">Projects</h2>

        <div className="grid">
          <div className="col-12">
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
          </div>
        </div>

        <div className="mt-md">
          <a href="https://github.com/tjhillard" className="link">
            View All
          </a>
        </div>

        <div style={{ height: '2000px' }}></div>
      </Layout>
    );
  }
}
