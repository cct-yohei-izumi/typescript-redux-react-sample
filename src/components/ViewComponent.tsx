import * as React from 'react';
import { ViewType } from '../constants/ActionTypes';
import { IHeaderProps } from '../interfaces/PropsInterface';
import UserSettingContainer from '../containers/UserSettingContainer';
import OrderContainer from '../containers/OrderContainer';

export default class extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }
  public render() {
    const ViewComponent =
      this.props.selectedViewType === ViewType.USER_VIEW ? <UserSettingContainer /> : <OrderContainer />;
    return <div>{ViewComponent}</div>;
  }
}
