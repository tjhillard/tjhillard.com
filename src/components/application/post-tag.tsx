import React from 'react';

interface Props {
  name: string;
}

const TAG_COLORS = {
  css: {
    bg: '#27A9DF',
  },
};

export default class PostTag extends React.Component<Props> {
  render() {
    return (
      <span
        className="font-secondary inline-block"
        style={{ ...this.tagStyle(this.props.name) }}
      >
        {this.props.name}
      </span>
    );
  }

  private tagStyle(name: string) {
    return {
      borderColor: TAG_COLORS[name].bg,
      borderWidth: '2px',
      borderStyle: 'solid',
      padding: '5px 12px',
      borderRadius: '3px',
    };
  }
}
