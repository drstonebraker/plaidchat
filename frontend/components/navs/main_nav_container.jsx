import { connect } from 'react-redux'

import MainNav from './main_nav'

const mapStateToProps = (state, ownProps) => {

  return {
    isDemo: state.session.currentUser && state.session.currentUser.isDemo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
