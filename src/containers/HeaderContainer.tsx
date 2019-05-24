import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import * as viewActions from '../actions/viewAction';
import component from '../components/HeaderComponent';
import { IHeaderState } from '../interfaces/StateInterface';

const stateToProps = (state: IHeaderState) => {
  return {
    selectedViewType: state.selectedViewType,
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
)(component);
