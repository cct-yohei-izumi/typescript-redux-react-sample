import * as React from 'react';
import { IViewOrderProps } from '../interfaces/PropsInterface';

export default class extends React.Component<IViewOrderProps> {
  constructor(props: IViewOrderProps) {
    super(props);
  }
  public render() {
    const selectedKinds = this.props.selectKinds.filter(kind => {
      return kind.checked;
    });
    const selectableItems = this.props.items.filter(item => {
      let viewable = false;
      selectedKinds.forEach(kind => {
        if (kind.id === item.kind) {
          viewable = true;
        }
      });
      return viewable;
    });

    if (selectableItems.length > 0 && this.props.price === 0) {
      this.props.actions.onChangeItemPrice(selectableItems[0].price);
    }
    return (
      <div>
        <form name="order">
          <select name="itemSelect" onChange={this.onChangeItem} defaultValue={`${this.props.price}`}>
            {selectableItems.map((item, i) => (
              <option value={item.price}>{item.name}</option>
            ))}
          </select>
          <input type="number" value={this.props.amount} onChange={this.onChangeAmount} />
          <div>
            <label>合計金額 : {this.props.sumPrice}</label>
          </div>
        </form>
      </div>
    );
  }

  private onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.actions.onChangeAmount(e.currentTarget.value);
    this.calcSumPrice(Number(e.currentTarget.value), this.props.price);
  };

  private onChangeItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.actions.onChangeItemPrice(e.currentTarget.options[e.currentTarget.selectedIndex].value);
    this.calcSumPrice(this.props.amount, Number(e.currentTarget.options[e.currentTarget.selectedIndex].value));
  };

  private calcSumPrice = (amount: number, price: number) => {
    this.props.actions.calcSumPrice(amount, price);
  };
}
