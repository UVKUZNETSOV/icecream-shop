export interface Products {
  title: string,
  image: string,
  cost: number,
  quantity: number
}

export interface CardProp extends Products {
  key: number,
  itemKey: number
}

export interface Product {
  id: number, 
  count: number
}

export interface CartSlice {
  name: string
}