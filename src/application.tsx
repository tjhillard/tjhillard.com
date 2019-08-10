import React from 'react';
import { Helmet } from 'react-helmet';

export default class Application extends React.Component {
  render() {
    return (
      <section className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>TJ Hillard</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link rel="canonical" href="https://tjhillard.com" />
        </Helmet>
        {this.props.children}
      </section>
    );
  }
}
