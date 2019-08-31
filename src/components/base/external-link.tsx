import React, { Component } from 'react';

interface Props {
  href: string;
  rel?: string;
  [key: string]: any;
}

export default class ExternalLink extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.href}
        target="_blank"
        rel={this.props.rel || 'noopener'}
        {...this.props}
      >
        {this.props.children}
      </a>
    );
  }
}
