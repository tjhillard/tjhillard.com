import React from 'react';
import '../styles/index.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default class MainLayout extends React.Component {
  render() {
    return (
      <section className="layout">
        <Navbar />
        <main className="main container">{this.props.children}</main>
        <Footer />
      </section>
    );
  }
}
