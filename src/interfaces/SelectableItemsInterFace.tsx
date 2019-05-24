export interface IItem {
  id: string;
  kind: string;
  name: string;
  price: number;
}

export interface IKind {
  id: string;
  name: string;
  checked: boolean;
}
