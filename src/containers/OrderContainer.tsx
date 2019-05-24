import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import * as viewActions from '../actions/viewAction';
import OrderComponent from '../components/OrderComponent';
import { IRootState } from '../interfaces/StateInterface';

const stateToProps = (state: IRootState) => {
  return {
    selectKinds: state.order.selectKinds,
    items: state.order.items,
    amount: state.order.amount,
    price: state.order.price,
    sumPrice: state.order.sumPrice,
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
)(OrderComponent);
