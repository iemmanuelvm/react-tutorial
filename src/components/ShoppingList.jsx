import { products2 } from './variables/Object'

export const ShoppingList = () => {

    const listItems = products2.map(product => 
        <li 
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>    
    )

    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}
