import { IItem, IKind } from '../interfaces/SelectableItemsInterFace';

export const DefaultItems: IItem[] = [
  {
    id: 'apple',
    kind: 'fruits',
    name: 'りんご',
    price: 100,
  },
  {
    id: 'banana',
    kind: 'fruits',
    name: 'バナナ',
    price: 50,
  },
  {
    id: 'beef',
    kind: 'meet',
    name: '牛肉',
    price: 300,
  },
  {
    id: 'chicken',
    kind: 'meet',
    name: '鶏肉',
    price: 200,
  },
  {
    id: 'gold',
    kind: 'metal',
    name: '金',
    price: 1500,
  },
  {
    id: 'silver',
    kind: 'metal',
    name: '銀',
    price: 1200,
  },
];

export const defaultKinds: IKind[] = [
  {
    checked: false,
    id: 'fruits',
    name: '果物',
  },
  {
    checked: false,
    id: 'meet',
    name: 'お肉',
  },
  {
    checked: false,
    id: 'metal',
    name: '金属',
  },
];
