import { Cartitem } from "./CartItem";

export class Cart{
  items:Cartitem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}
