import { connect } from 'react-redux'

import ChatgroupForm from './chatgroup_form.jsx'
import * as ErrorsSelector from '../../../selectors/errors_selectors'
import { createTeam, clearTeamErrors } from '../../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
  let type;
  let headingContent;
  let submitContent;

  if (state.ui.chatgroupFormType === 'newTeam') {
    type = 'newTeam'
    headingContent = 'Create a new team'
    submitContent = 'Create Team!'
  }

  const errors = state.errors.team;

  return {
    type,
    headingContent,
    submitContent,
    nameErrors: ErrorsSelector.getErrors(errors, 'name'),
    hasNameErrors: ErrorsSelector.hasErrors(errors, 'name'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;

  if (ownProps.type === 'newTeam') {
    action = createTeam
  }

  return {
    clearErrors: () => dispatch(clearTeamErrors()),
    action: team => dispatch(action(team)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatgroupForm);
