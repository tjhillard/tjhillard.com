import React, { PropsWithChildren } from 'react';
import { Link } from 'gatsby';

interface Props extends PropsWithChildren<any> {
  image: { src: string; alt: string };
  title: string;
  linkTo?: string;
  href?: string;
  description?: string;
}

const cardContent = (props: Props) => (
  <div className="list-item-card flex items-center p-md rounded-md cursor-pointer">
    <img
      style={{ height: '50px', width: '50px' }}
      src={props.image.src}
      alt={props.image.alt}
    />
    <div className="ml-lg flex flex-col justify-center">
      <span className="font-weight-bold block">{props.title}</span>
      <span className="mt-sm block font-size-sm">{props.description}</span>
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
