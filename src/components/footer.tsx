import React from 'react'
import { Link } from 'gatsby'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer font-size-sm">
        <div className="container flex justify-between">
          <div>© TJ Hillard 2019</div>
          <div>
            <a href="#" className="link mx-sm">
              View Source
            </a>
            <Link to="/blog" className="link mx-sm">
              Blog
            </Link>
            <Link to="/blog" className="link mx-sm">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}
