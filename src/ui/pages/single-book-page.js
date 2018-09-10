import React, { Component } from 'react';
import { Container } from '../base-kits';
import { connect } from 'react-redux';
import { MainMenu, TopMenuBar, SingleBookPreviewCard } from '../components';

class SingleBookPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle={`Book: ${this.props.pageTitle}`} />
        <SingleBookPreviewCard id={this.props.match.params.id} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageTitle: state.bookReducer.pageTitle,
  };
};

export default connect(
  mapStateToProps,
  null
)(SingleBookPage);
