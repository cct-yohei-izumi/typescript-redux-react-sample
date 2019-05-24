import * as React from 'react';
import { IViewUserSettingProps } from '../interfaces/PropsInterface';
import { IKind } from '../interfaces/SelectableItemsInterFace';

export default class extends React.Component<IViewUserSettingProps> {
  constructor(props: IViewUserSettingProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <input type="text" value={this.props.userName} onChange={this.onChangeText} />
        <p>
          {this.props.selectKinds.map((kind, i) => (
            <div>
              <input type="checkbox" value={i} checked={kind.checked} onChange={this.onChangeCheckBox} />
              {kind.name}
            </div>
          ))}
        </p>
      </div>
    );
  }

  private onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.actions.onChangeText(e.currentTarget.value);
  };

  private onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const kind: IKind = this.props.selectKinds[e.currentTarget.value];
    kind.checked = !kind.checked;
    this.props.actions.onChangeCheckBox({ ...this.props.selectKinds, kind });
  };
}
