import { products } from './variables/Object';

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);




export const ListItems = () => {
    return (
        <>
            <ul>
                {listItems}
            </ul>
        </>
    )
}
