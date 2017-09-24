import { connect } from 'react-redux'

import ChatgroupModal from './chatgroup_modal.jsx'
import { openNewTeamViewModal, closeNewTeamViewModal } from
  '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    isOpen: state.ui.isNewTeamViewModalOpen,
    type: ownProps.type,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onRequestClose: () => dispatch(closeNewTeamViewModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatgroupModal);
