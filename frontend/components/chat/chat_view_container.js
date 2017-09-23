import { connect } from 'react-redux'

import ChatView from './chat_view'
import { editUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {

  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    editUser: user => dispatch(editUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);
