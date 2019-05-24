import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import * as viewActions from '../actions/viewAction';
import UserSettingComponent from '../components/UserSettingComponent';
import { IRootState } from '../interfaces/StateInterface';

const stateToProps = (state: IRootState) => {
  return {
    selectKinds: state.setting.selectKinds,
    userName: state.setting.userName,
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
)(UserSettingComponent);
