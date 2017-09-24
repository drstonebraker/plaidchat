import { connect } from 'react-redux'

import ChatgroupForm from './chatgroup_form.jsx'
import * as ErrorsSelector from '../../../selectors/errors_selectors'
import { createTeam, clearTeamErrors } from '../../../actions/team_actions';
import { closeChatGroupModal } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let headingContent;
  let submitContent;

  if (state.ui.chatgroupFormType === 'createTeam') {
    formType = 'createTeam'
    headingContent = 'Create a new team'
    submitContent = 'Create Team!'
  }

  const errors = state.errors.team;

  return {
    formType,
    headingContent,
    submitContent,
    nameErrors: ErrorsSelector.getErrors(errors, 'name'),
    hasNameErrors: ErrorsSelector.hasErrors(errors, 'name'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    closeChatGroupModal: () => dispatch(closeChatGroupModal()),
    clearErrors: () => dispatch(clearTeamErrors()),
    createTeam: team => dispatch(createTeam(team)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatgroupForm);
