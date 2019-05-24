import * as React from 'react';
import { ViewType } from '../constants/ActionTypes';
import { IHeaderProps } from '../interfaces/PropsInterface';

export default class extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <label>ユーザー情報</label>
        <input type="radio" name="viewType" value={ViewType.USER_VIEW} onChange={this.onRadioClick} />
        <label>注文</label>
        <input type="radio" name="viewType" value={ViewType.ORDER_VIEW} onChange={this.onRadioClick} />
      </div>
    );
  }

  // tsLint回避　https://qiita.com/acro5piano/items/7c90255a449295a43e59
  private onRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.actions.onRadioClick(e.currentTarget.value);
  };
}
