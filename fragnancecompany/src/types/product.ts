export type ProductProps = {
    id: number,
    title: string,
    product: string,
    price: number,
    description: string,
    type: string,
    image: string
}

export type ReviewProps = {
    id: number;
    productId: number;
    stars: number;
    name: string;
    text: string;
}