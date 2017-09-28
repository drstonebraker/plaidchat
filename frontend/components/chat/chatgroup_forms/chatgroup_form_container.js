import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatgroupForm from './chatgroup_form.jsx'
import * as ErrorsSelector from '../../../selectors/errors_selectors'
import { createTeam, clearChatgroupErrors } from
  '../../../actions/team_actions';
import { createChannel } from
  '../../../actions/channel_actions';
import { closeChatGroupModal } from '../../../actions/ui_actions';
import { updateDefaultTeam } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let headingContent;
  let submitContent;
  let errors;

  switch (state.ui.chatgroupFormType) {
    case 'createTeam':
      formType = 'createTeam'
      headingContent = 'Create a new team'
      submitContent = 'Create Team'
      errors = state.errors.team;
      break;
    case 'createChannel':
      formType = 'createChannel'
      headingContent = 'Create a new channel'
      submitContent = 'Create Channel'
      errors = state.errors.channel;
      break;
  }

  return {
    formType,
    headingContent,
    submitContent,
    nameErrors: ErrorsSelector.getErrors(errors, 'name'),
    hasNameErrors: ErrorsSelector.hasErrors(errors, 'name'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { teamId } = ownProps.match.params

  return {
    closeChatGroupModal: () => dispatch(closeChatGroupModal()),
    clearChatgroupErrors: () => dispatch(clearChatgroupErrors()),
    createTeam: team => dispatch(createTeam(team)),
    createChannel: channel => dispatch(createChannel(
      Object.assign( { teamId }, channel )
    ))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatgroupForm));
