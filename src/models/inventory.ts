import Item from './item';

// { [index: string]: number } &
export interface Wallet {
  cp: number;
  sp: number;
  ep: number;
  gp: number;
  pp: number;
}

export default interface Inventory {
  items: Item[];
  money: Wallet;
}

