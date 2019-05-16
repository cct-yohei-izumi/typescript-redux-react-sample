import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import * as counterActions from '../actions/counterAction'
import component from '../components/component'
import {} from '../interfaces/StateInterface'
import { IRootState } from '../interfaces/StateInterface'

const stateToProps = (state: IRootState) => {
    return {
        count: state.counter.count 
    }
  }
  
const dispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        actions: bindActionCreators(counterActions, dispatch)        
    };
}

export default connect(stateToProps, dispatchToProps)(component);