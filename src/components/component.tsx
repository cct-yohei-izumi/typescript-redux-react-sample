import * as React from 'react';
import {IProps} from '../interfaces/PropsInterface'

export default class extends React.Component<IProps> {
  constructor(props: IProps){
    super(props)
  }
  public render(){
    return (
      <div>
        <span>{this.props.count}</span>
        <button onClick={this.onIncrementClick}>
          inc
        </button>
        <button onClick={this.onDecreaseClick}>
          dec
        </button>
      </div>
    );
};

// tsLint回避　https://qiita.com/acro5piano/items/7c90255a449295a43e59
private onIncrementClick = () => { 
  this.props.actions.onIncrementClick(2); 
}
private onDecreaseClick =() => {
  this.props.actions.onDecreaseClick(1);
}

}

