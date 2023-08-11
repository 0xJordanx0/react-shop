type Cart = {
    cartItems: cartItem
}

type cartItem = {
    title: string,
    price: number,
    quantity: number,
    image: string,
    size: string,
    color: string,
}

type productList = {
    storeItems: productItem[]
}

type productItem = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: rating
}

type rating = {
    rate: number,
    count: number
}

export type {Cart, cartItem, productList, productItem};