import React from 'react';
import SEO from './components/application/seo';

export default class Application extends React.Component {
  render() {
    return (
      <section className="application">
        <SEO />
        {this.props.children}
      </section>
    );
  }
}
