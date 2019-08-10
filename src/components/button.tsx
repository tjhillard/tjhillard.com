import React, { PropsWithChildren } from 'react'

interface Props {
  to?: string
  href?: string
}

export default class Button extends React.Component<PropsWithChildren<Props>> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return <button className="button">{this.props.children}</button>
  }
}
