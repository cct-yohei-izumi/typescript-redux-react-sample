import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import * as viewActions from '../actions/viewAction';
import ViewComponent from '../components/ViewComponent';
import { IRootState } from '../interfaces/StateInterface';

const stateToProps = (state: IRootState) => {
  return {
    selectedViewType: state.header.selectedViewType,
  };
};

const dispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    actions: bindActionCreators(viewActions, dispatch),
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(ViewComponent);
