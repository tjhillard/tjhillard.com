import React from 'react';
import '../styles/index.scss';
import Application from '../application';
import Navbar from '../components/application/navbar';
import Footer from '../components/application/footer';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Application>
        <Navbar />
        <main className="main container">{this.props.children}</main>
        <Footer />
      </Application>
    );
  }
}
