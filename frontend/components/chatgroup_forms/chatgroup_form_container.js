import { connect } from 'react-redux'

import ChatgroupForm from './chatgroup_form'
import * as ErrorsSelector from '../../selectors/errors_selectors'
import { createTeam, clearTeamErrors } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
  let type;
  let headingContent;
  let submitContent;

  if (ownProps.type === 'newTeam') {
    type = 'newTeam'
    headingContent = 'Create a new team'
    submitContent = 'Create Team!'
  }

  const errors = state.errors.teams;

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
