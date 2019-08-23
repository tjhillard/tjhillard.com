import React, { PropsWithChildren } from 'react';
import { Link } from 'gatsby';

import PostTag from './post-tag';

interface Props extends PropsWithChildren<any> {
  image?: { src: string; alt: string };
  title: string;
  linkTo?: string;
  href?: string;
  date?: string;
  tags?: string[];
}

const cardContent = (props: Props) => (
  <div className="list-item-card flex items-center p-md rounded-md cursor-pointer">
    <img
      style={{ maxHeight: '50px', maxWidth: '50px' }}
      src={props.image ? props.image.src : null}
      alt={props.image ? props.image.alt : null}
    />
    <div className="ml-lg w-full">
      <div className="font-weight-bold">{props.title}</div>
      <div className="">
        <div className="font-size-xs mt-xs">{props.date}</div>
        <div className="mt-sm">
          {props.tags &&
            props.tags.map(tag => (
              <span className="mr-xs">
                <PostTag name={tag} />
              </span>
            ))}
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  </div>
);

export default class ListItemCard extends React.Component<
  PropsWithChildren<Props>
> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.linkTo) {
      return (
        <Link to={this.props.linkTo} className="link no-underline">
          {cardContent(this.props)}
        </Link>
      );
    }
    if (this.props.href) {
      return (
        <a href={this.props.href} className="link" target="_blank">
          {cardContent(this.props)}
        </a>
      );
    }

    return <div>{cardContent(this.props)}</div>;
  }
}
